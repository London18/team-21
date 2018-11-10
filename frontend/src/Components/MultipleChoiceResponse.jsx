import React, { Component } from "react";

class MultipleChoiceResponse extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="checkbox" id="yes" name="yes" value="yes" />
          <label htmlFor="verygood">yes</label>
        </div>
        <div>
          <input type="checkbox" id="no" name="no" value="no" />
          <label htmlFor="good">no</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="notApplicable"
            name="notApplicable"
            value="notApplicable"
          />
          <label htmlFor="notApplicable">not applicable</label>
        </div>
      </div>
    );
  }
}

export default MultipleChoiceResponse;
