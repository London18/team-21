import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Survey from './Components/Survey';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';

const App = () => {
  let loggedInBefore = localStorage.getItem('loggedIn');
  let Home = loggedInBefore === 'true' ? Dashboard : Login;
  return (
    <Router>
      <React.Fragment>
        <Header />
        {/* <nav>
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
        </nav> */}
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/login/" exact component={Login} />
          <Route path="/survey/" component={Survey} />
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
