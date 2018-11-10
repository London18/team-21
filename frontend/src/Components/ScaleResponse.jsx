import React, { Component } from "react";

const ScaleResponse = props => {
  const onSelect = () => {
    props.onValidInput();
  };
  return (
    <div className="left">
      <div>
        <input
          type="radio"
          id="na"
          onClick={onSelect}
          name="scale"
          value="na"
        />
        <label htmlFor="na">strongly disagree </label>
      </div>
      <div>
        <input
          type="radio"
          id="some"
          name="scale"
          onClick={onSelect}
          value="some"
        />
        <label htmlFor="some">disagree</label>
      </div>
      <div>
        <input
          type="radio"
          id="considerable"
          name="scale"
          onClick={onSelect}
          value="considerable"
        />
        <label htmlFor="considerable">agree</label>
      </div>
      <div>
        <input
          onClick={onSelect}
          type="radio"
          id="most"
          name="scale"
          value="most"
        />
        <label htmlFor="most">strongly agree</label>
      </div>
    </div>
  );
};

export default ScaleResponse;
