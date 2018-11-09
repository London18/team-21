import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Survey from "./Components/Survey";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/survey/">Survey</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Dashboard} />
      <Route path="/login/" exact component={Login} />
      <Route path="/survey/" component={Survey} />
    </div>
  </Router>
);

export default App;
