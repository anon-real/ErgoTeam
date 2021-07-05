import React, {lazy} from 'react';
// import logo from './logo.svg';
import '../App.css';
// import {currentHeight} from "../ergo-related/explorer";
import {Provider} from 'react-redux'
import Sidebar from '../Components/Sidebar';

const Home = lazy(() => import('./routes/Home'));
// const Team = lazy(() => import('./routes/Team'));

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Sidebar/>
      <header className="App-header">
      </header>
      {/* <Home/> */}
    </div>
    // </Provider>
  );
}

export default App;
