import React, { Component } from "react";

const ScaleResponse = () => {
  return (
    <div>
      <div>
        <input type="radio" id="na" name="scale" value="na" />
        <label htmlFor="na">strongly disagree</label>
      </div>
      <div>
        <input type="radio" id="some" name="scale" value="some" />
        <label htmlFor="some">disagree</label>
      </div>
      <div>
        <input
          type="radio"
          id="considerable"
          name="scale"
          value="considerable"
        />
        <label htmlFor="considerable">agree</label>
      </div>
      <div>
        <input type="radio" id="most" name="scale" value="most" />
        <label htmlFor="most">strongly agree</label>
      </div>
    </div>
  );
};

export default ScaleResponse;
