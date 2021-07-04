import React from 'react';
// import logo from './logo.svg';
import '../App.css';
// import {currentHeight} from "../ergo-related/explorer";
import Home from "./routes/Home";
import Sidebar from '../Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <header className="App-header">
      </header>
      {/* <Home/> */}
    </div>
  );
}

export default App;
