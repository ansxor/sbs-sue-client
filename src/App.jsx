import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import TestPageView from "./components/TestPageView";

function App() {
  const [classState, setClassState] = useState("");
  const [currentPageID, setCurrentPageID] = useState(1829);

  function toggleHide() {
    if (classState === "") setClassState("mythehide");
    else setClassState("");
    console.log(classState);
  }

  function changePage(newId) {
    setCurrentPageID(newId);
  }

  return (
    <div className={`App`}>
      <header className="App-header">
        <button onClick={toggleHide}>toggle sidebar view</button>
      </header>
      <main className={classState}>
        <div className="content">
          <TestPageView id={currentPageID} />
        </div>
        <Sidebar
          changePage={changePage}
        />
      </main>
    </div>
  );
}

export default App;
