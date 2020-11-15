import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main
        style={{
          height: "100vh",
          width: "100vw",
          margin: "0",
          display: 'flex'
        }}
      >
        <div style={{
          flexBasis: "400%"
        }}></div>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
