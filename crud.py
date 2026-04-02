from sqlalchemy.orm import Session
import models

def save_market_data(db: Session, data: list):
    for item in data:
        db_item = models.Market(
            symbol=item["symbol"],
            price=item["price"],
            volume=item["volume"]
        )
        db.add(db_item)
    db.commit()


def get_markets(db: Session):
    return db.query(models.Market).all()


def get_price(db: Session, symbol: str):
    return db.query(models.Market).filter(models.Market.symbol == symbol).all()


def get_history(db: Session, symbol: str, limit: int):
    return db.query(models.Market)\
        .filter(models.Market.symbol == symbol)\
        .order_by(models.Market.timestamp.desc())\
        .limit(limit).all()