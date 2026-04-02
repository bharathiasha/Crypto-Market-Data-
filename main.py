from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models
import database
import crud
from fetch_data import fetch_crypto

models.Base.metadata.create_all(bind=database.engine)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 👉 Fetch and store data
@app.get("/fetch")
def fetch_and_store(db: Session = Depends(get_db)):
    data = fetch_crypto()
    crud.save_market_data(db, data)
    return {"message": "Data stored successfully"}

# 👉 Get all markets
@app.get("/markets")
def get_markets(db: Session = Depends(get_db)):
    return crud.get_markets(db)

# 👉 Get price by symbol
@app.get("/prices")
def get_price(symbol: str, db: Session = Depends(get_db)):
    return crud.get_price(db, symbol)

# 👉 Get history
@app.get("/history")
def get_history(symbol: str, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_history(db, symbol, limit)

@app.get("/analytics")
def analytics(symbol: str, db: Session = Depends(get_db)):
    data = crud.get_history(db, symbol, 2)

    if len(data) < 2:
        return {"message": "Not enough data"}

    old = data[-1].price
    new = data[0].price

    change = ((new - old) / old) * 100

    return {
        "symbol": symbol,
        "price_change_percent": round(change, 2)
    }

@app.get("/strategy")
def strategy(symbol: str, db: Session = Depends(get_db)):
    data = crud.get_history(db, symbol, 5)

    prices = [d.price for d in data]

    if len(prices) < 5:
        return {"message": "Not enough data"}

    avg = sum(prices) / len(prices)

    if prices[0] > avg:
        signal = "BUY"
    elif prices[0] < avg:
        signal = "SELL"
    else:
        signal = "HOLD"

    return {
        "symbol": symbol,
        "signal": signal
    }



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)