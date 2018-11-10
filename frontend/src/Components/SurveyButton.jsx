import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SurveyButton = props => {
  const handleClick = () => {
    console.log('survey ' + props.name + ' clicked');
  };

  return (
    <React.Fragment>
      <div className="p2 flex-item" onClick={handleClick}>
        <Link to={`/survey/` + props.name}>
          <button type="button" className="btn btn-success btn-lg">
            {props.name}
          </button>
        </Link>
      </div>
      <br />
    </React.Fragment>
  );
};

export default SurveyButton;
