import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Survey from './Components/Survey';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Tree from './Components/Tree';
import Insights from './Components/Insights';

const App = () => {
  let loggedInBefore = localStorage.getItem('loggedIn');
  let Home = loggedInBefore === 'true' ? Dashboard : Login;
  return (
    <Router>
      <React.Fragment>
        <Header />

        <div className="content centered">
          <br />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/login/" exact component={Login} />
          <Route path="/insights/" component={Insights} />
          <Route path="/survey/:name" component={Survey} />
          {/* <Route path="/survey/" component={Survey} /> */}
          <Route path="/tree/" component={Tree} />
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
