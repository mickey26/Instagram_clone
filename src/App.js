import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import LandingPage from "./components/LandingPage";
import reducers from "./reducers";
import thunk from "redux-thunk";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducers, {}, applyMiddleware(thunk));

function App(props) {
  console.log(props, "props in app page");
  const [loggedIn, setLoggenIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    authListner();
  }, []);

  const authListner = () => {};

  return (
    <div className='app'>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path='/login' component={SignIn} />
            <Route path='/home' component={LandingPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
