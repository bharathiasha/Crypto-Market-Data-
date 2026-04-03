🚀 Crypto Market Data & Analytics Application

📌 Overview

This is a full-stack Crypto Market Analytics Application built using FastAPI and React.
The application fetches real-time cryptocurrency data, stores it in a database, performs analytics, and generates trading signals (BUY / SELL / HOLD).

---

🛠 Tech Stack

Backend

- Python (FastAPI)
- SQLAlchemy
- SQLite

Frontend

- React.js
- Axios

Data & Analytics

- Pandas
- NumPy

---

✨ Features

- 📊 Fetch crypto market data from CoinGecko API
- 💾 Store data in database
- 📈 View market data (price, volume)
- 📉 Analytics (price change %)
- 💡 Strategy module (BUY / SELL / HOLD)
- 🔗 Full integration between frontend and backend

---

📂 Project Structure

crypto-market/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   └── requirements.txt
│
├── crypto-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── node_modules/ (ignored)
│
└── README.md

---

📡 API Endpoints

- GET /fetch → Fetch and store crypto data
- GET /markets → Retrieve all stored market data
- GET /analytics?symbol=BTC → Get price change percentage
- GET /strategy?symbol=BTC → Get trading signal

---

▶️ How to Run Project

🔹 1. Clone Repository

git clone https://github.com/your-username/crypto-market.git
cd crypto-market

---

🔹 2. Backend Setup (FastAPI)

cd backend

Create virtual environment (optional)

python -m venv venv
venv\Scripts\activate

Install dependencies

pip install -r requirements.txt

Run backend server

uvicorn main:app --reload

👉 Backend runs at: http://127.0.0.1:8000

---

🔹 3. Frontend Setup (React)

cd ../crypto-frontend

Install dependencies

npm install

Run frontend

npm start

👉 Frontend runs at: http://localhost:3000

---

📊 Example Output

- Price Change: +2.5%
- Strategy: BUY

---

⚙️ Strategy Logic

- If current price > average price → BUY
- If current price < average price → SELL
- Otherwise → HOLD

---

🚧 Challenges Faced

- Faced nested Git repository issue in frontend
- Resolved by removing ".git" inside frontend folder
- Successfully pushed complete project to GitHub

---

🔮 Future Improvements

- Add real-time updates using WebSockets
- Improve UI with charts and graphs
- Add authentication system
- Deploy project on cloud (AWS / Render)

---

👩‍💻 Author

Asha Bharathi

---
