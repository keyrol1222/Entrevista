import React from "react";
import Home from "./components/home/Home";
import Error from "./components/error/Try";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
