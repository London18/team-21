import React, { Component } from "react";
import OpenTextResponse from "./OpenTextResponse";
import MultipleChoiceResponse from "./MultipleChoiceResponse";
import ScaleResponse from "./ScaleResponse";

class Question extends Component {
  componentDidUpdate(newProps) {
    if (this.props.text !== newProps.text) {
      document.getElementById("questionForm").reset();
    }
  }
  render() {
    return (
      <div>
        <form id="questionForm">
          <p>{this.props.text}</p>
          <ScaleResponse />
        </form>
      </div>
    );
  }
}

export default Question;
