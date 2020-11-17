import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import TestPageView from "./components/TestPageView.jsx";
import Home from './components/Home.jsx';

// TODO: ugh i should really make constants for things shouldnt i
// just need to figure out how to make them global i guess without
// 1 million props distribution

function App() {
  const [classState, setClassState] = useState("");
  const [currentPageID, setCurrentPageID] = useState(1829);
  const [token, setToken] = useState("");

  function toggleHide() {
    if (classState === "") setClassState("mythehide");
    else setClassState("");
  }

  function changePage(newId) {
    setCurrentPageID(newId);
  }

  return (
    <Router>
      <div className={`App`}>
        <header className="App-header">
          <button onClick={toggleHide}>toggle sidebar view</button>
        </header>
        <main className={classState}>
          <div className="content">
            <Switch>
              <Route path="/sbs-sue-client/page/:pid" component={TestPageView} />
              <Route path="" component={Home} />
            </Switch>
          </div>
          <Sidebar setToken={setToken} usertoken={token} changePage={changePage} />
        </main>
      </div>
    </Router>
  );
}

export default App;
