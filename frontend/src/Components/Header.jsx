import React from "react";
import { withRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sidebar">
      <Link className="active" to="/">
        Home
      </Link>
      <a href="/tree">Your Garden</a>
      <a href="/insights">Insights</a>
    </div>
  );
};

export default withRouter(Header);
