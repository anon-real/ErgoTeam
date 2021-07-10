import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../Styles/App.css';
import {Provider} from 'react-redux'
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import store from "../Storage/Config/ConfigureStore";
import Loading from '../Components/Loading'
const Home = lazy(() => import('./routes/Home'));
const Team = lazy(() => import('./routes/Team'));

function App() {
  return (
    <Provider store={store}>
      <div className="view-container">
        <Sidebar/>
        <div className="app-container">
          <Header/>
          <div className="app-wrapper">
            <Router>
              <Suspense fallback={Loading}>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/team" component={Team}/>
                  {/* <Route path="*" component={NotFound}/> */}
                </Switch>
              </Suspense>
            </Router>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
