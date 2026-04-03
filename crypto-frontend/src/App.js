import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [markets, setMarkets] = useState([]);
  const [symbol, setSymbol] = useState("BTC");
  const [analytics, setAnalytics] = useState(null);
  const [strategy, setStrategy] = useState(null);

  const BASE_URL = "http://127.0.0.1:8000";

  // Fetch market data
  const fetchMarkets = async () => {
    await axios.get(`${BASE_URL}/fetch`);
    const res = await axios.get(`${BASE_URL}/markets`);
    setMarkets(res.data);
  };

  // Fetch analytics
  const fetchAnalytics = async () => {
    const res = await axios.get(`${BASE_URL}/analytics?symbol=${symbol}`);
    setAnalytics(res.data);
  };

  // Fetch strategy
  const fetchStrategy = async () => {
    const res = await axios.get(`${BASE_URL}/strategy?symbol=${symbol}`);
    setStrategy(res.data);
  };

  useEffect(() => {
    fetchMarkets();
  }, []);

//   return (
//     <div style={{ padding: "20px",
//        fontFamily: "Arial",
//       backgroundColor: "#f5f5f5"
//      }}>
//       <h1>Crypto Dashboard</h1>

//       {/* Market Table */}
//       <h2>Market Data</h2>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Symbol</th>
//             <th>Price</th>
//             <th>Volume</th>
//           </tr>
//         </thead>
//         <tbody>
//           {markets.map((m, index) => (
//             <tr key={index}>
//               <td>{m.symbol}</td>
//               <td>{m.price}</td>
//               <td>{m.volume}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Input */}
//       <h2>Enter Symbol</h2>
//       <input
//         value={symbol}
//         onChange={(e) => setSymbol(e.target.value.toUpperCase())}
//       />

//       <br /><br />

//       {/* Buttons */}
//       <button onClick={fetchAnalytics}>Get Analytics</button>
//       <button onClick={fetchStrategy}>Run Strategy</button>

//       {/* Analytics */}
//       {analytics && (
//         <div>
//           <h3>Analytics</h3>
//           <p>Price Change: {analytics["price_change_%"]}%</p>
//         </div>
//       )}

//       {/* Strategy */}
//       {strategy && (
//         <div>
//           <h3>Strategy</h3>
//           <p>Signal: {strategy.signal}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

return (
  <div
    style={{
      padding: "30px",
      fontFamily: "Arial",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}
  >
    <h1 style={{ textAlign: "center" }}>Crypto Dashboard</h1>

    {/* Table */}
    <div style={{ marginTop: "20px" }}>
      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          backgroundColor: "white",
          borderCollapse: "collapse"
        }}
      >
        <thead style={{ backgroundColor: "#ddd" }}>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>

        <tbody>
          {markets.map((m, i) => (
            <tr key={i}>
              <td>{m.symbol}</td>
              <td>{m.price}</td>
              <td>{m.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Input + Buttons */}
    <div style={{ marginTop: "20px" }}>
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        placeholder="Enter Symbol"
        style={{
          padding: "8px",
          marginRight: "10px"
        }}
      />

      <button
        onClick={fetchAnalytics}
        style={{
          padding: "8px 12px",
          marginRight: "10px",
          cursor: "pointer"
        }}
      >
        Get Analytics
      </button>

      <button
        onClick={fetchStrategy}
        style={{
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        Run Strategy
      </button>
    </div>

    {/* Analytics */}
    {analytics && (
      <div style={{ marginTop: "20px" }}>
        <h3>Analytics</h3>
        <p>Price Change: {analytics.price_change_percent}%</p>
      </div>
    )}

    {/* Strategy */}
       {strategy && (
      <div style={{ marginTop: "20px" }}>
        <h3>Strategy</h3>
        <p>Signal: {strategy.signal}</p>
      </div>
    )}
  </div>
);
}

export default App;