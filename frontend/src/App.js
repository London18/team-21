import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Survey from "./Components/Survey";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Tree from "./Components/Tree";
import PersonalInfo from "./Components/PersonalInfo";

const App = () => {
  let loggedInBefore = getLoggedInStatus();
  let Home = loggedInBefore === "true" ? Dashboard : Login;
  return (
    <Router>
      <React.Fragment>
        <Header />
<<<<<<< HEAD

=======
>>>>>>> ac04194c480c9fcc1de7c8dd79da4ee477dd6ac4
        <div className="content centered">
          <br />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/login/" exact component={Login} />
          <Route path="/survey/:name" component={Survey} />
          <Route path="/registernoid/" component={PersonalInfo} />
          <Route path="/tree/" component={Tree} />
        </div>
      </React.Fragment>
    </Router>
  );
};

const getLoggedInStatus = () => {
  let rememberedLogIn = localStorage.getItem("loggedIn");
  let sessionLoggedIn = sessionStorage.getItem("loggedIn");
  return rememberedLogIn || sessionLoggedIn;
};

export default App;
