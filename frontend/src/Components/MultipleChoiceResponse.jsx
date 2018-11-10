import React, { Component } from "react";

class MultipleChoiceResponse extends React.Component {
  render() {
    const onSelect = () => {
      this.props.onValidInput();
    };
    return (
      <div>
        <div>
          <input
            onClick={onSelect}
            type="radio"
            id="yesBox"
            name="multiple"
            value="yes"
          />
          <label htmlFor="verygood">yes</label>
        </div>
        <div>
          <input type="radio" id="noBox" name="multiple" value="no" />
          <label htmlFor="good">no</label>
        </div>
        <div>
          <input
            onClick={onSelect}
            type="radio"
            id="notApplicableBox"
            name="multiple"
            value="notApplicable"
          />
          <label htmlFor="notApplicable">not applicable</label>
        </div>
      </div>
    );
  }
}

export default MultipleChoiceResponse;
