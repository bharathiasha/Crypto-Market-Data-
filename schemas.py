from pydantic import BaseModel
from datetime import datetime

class MarketCreate(BaseModel):
    symbol: str
    price: float
    volume: float

class MarketResponse(BaseModel):
    symbol: str
    price: float
    volume: float
    timestamp: datetime

    class Config:
        from_attributes = True