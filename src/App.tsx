import React from 'react';
import logo from './logo.svg';
import './Styles/App.css';
// import {currentHeight} from "./ergo-related/explorer";
import MyErgoPage from "./my-ergo-page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyErgoPage/>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
