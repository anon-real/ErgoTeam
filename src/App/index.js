import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../Styles/App.css';
import {Provider} from 'react-redux'
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import store from "../Storage/Config/ConfigureStore";
import Loading from '../Components/Loading'
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import DarkTheme from '../Styles/MaterialThemes/DarkTheme'

const applyTheme = createMuiTheme(DarkTheme);

const Home = lazy(() => import('./routes/Home'));
const Team = lazy(() => import('./routes/Team'));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={applyTheme}>
      <Router>
        <div className="view-container">
          <Sidebar/>
          <div className="app-container">
            <Header/>
            <div className="app-wrapper">
                <Suspense fallback={Loading}>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/teams" component={Team}/>
                    {/* <Route path="*" component={NotFound}/> */}
                  </Switch>
                </Suspense>
            </div>
          </div>
        </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
