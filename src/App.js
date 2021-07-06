import React from "react";
import Home from "./components/home/Home" 
import Error from "./components/error/Try"
import Login from "./components/login/Login"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  

  return (

    <Router>
    <div className="App">
    <ul>
    <li ><Link to="/">Home</Link></li>
  </ul>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/error">
          <Error/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
      </Switch>
     
    
     
    </div>
    </Router>
  );
}

export default App;
