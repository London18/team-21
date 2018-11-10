import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="sidebar">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/garden">Your Garden</Link>
      <Link to="/insights">Insights</Link>
    </div>
  );
};

export default withRouter(Header);
