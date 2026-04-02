from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
import datetime

class Market(Base):
    __tablename__ = "market"

    id = Column(Integer, primary_key=True, index=True)
    symbol = Column(String)
    price = Column(Float)
    volume = Column(Float)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)