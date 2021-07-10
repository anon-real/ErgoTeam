import React, {lazy} from 'react';
// import logo from './logo.svg';
import '../Styles/App.css';
import {Provider} from 'react-redux'
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import store from "../Storage/Config/ConfigureStore";
const Home = lazy(() => import('./routes/Home'));
// const Team = lazy(() => import('./routes/Team'));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Sidebar/>
      </div>
    </Provider>
  );
}

export default App;
