import requests

def fetch_crypto():
    url = "https://api.coingecko.com/api/v3/coins/markets"
    
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 10
    }

    response = requests.get(url, params=params)
    data = response.json()

    result = []

    for coin in data:
        result.append({
            "symbol": coin["symbol"].upper(),
            "price": coin["current_price"],
            "volume": coin["total_volume"]
        })

    return result
print("Fetching data from API...")