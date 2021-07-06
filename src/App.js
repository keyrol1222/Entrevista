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
            <h1 className="h1Loggin">Por favor logear para continuar</h1>
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
