import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../Styles/App.css";
import { Provider } from "react-redux";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import configureStore, { history } from "../Storage/store";
import Loading from "../Components/Loading";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import DarkTheme from "../Styles/MaterialThemes/DarkTheme";
import WalletModal from "../Components/WalletModal";
import { issueTeamToken } from "../ergo-related/action";

const applyTheme = createTheme(DarkTheme);
export const store = configureStore();
const Home = lazy(() => import("./routes/Home"));
const Team = lazy(() => import("./routes/Team"));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={applyTheme}>
        <Router>
          <div className="view-container">
            <Sidebar />
            <div className="app-container">
              <Header />
              <div className="app-wrapper">
                <Suspense fallback={Loading}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/teams" component={Team} />
                    {/* <Route path="*" component={NotFound}/> */}
                  </Switch>
                </Suspense>
              </div>
              <WalletModal />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
