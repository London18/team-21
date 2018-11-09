import React, { Component } from "react";

const divStyle = {
  // color: "red",
  backgroundColor: "grey",
  width: "300pt",
  height: "50pt",
  cursor: "pointer",
};

const SurveyButton = props => {
  const handleClick = () => {
    console.log("survey " + props.name + " clicked");
  };

  return (
    <div style={divStyle} onClick={handleClick}>
      <p>{props.name}</p>
    </div>
  );
};

export default SurveyButton;
