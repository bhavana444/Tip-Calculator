import React, { Component } from "react";

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";

import Guide from "./Guide";
import App from "./Contact1";
import Signup from "./register";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <nav>
          <ul className="header">
            <li><NavLink  to="/home">Home</NavLink></li>
            <li><NavLink to= "/register">Register</NavLink></li>
            <li><NavLink to="/calculator">Calculator</NavLink></li>
            <li><NavLink to="/guide">Guide</NavLink></li>
            
           
          </ul>
          </nav>
          <div className="content">
            <Route  path="/home" component={Home} />
            <Route path="/guide" component={Guide}/>
            <Route path="/calculator" component={App} />
            <Route path="/register" component={Signup} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;