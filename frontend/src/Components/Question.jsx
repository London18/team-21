import React, { Component } from "react";
import OpenTextResponse from "./OpenTextResponse";
import MultipleChoiceResponse from "./MultipleChoiceResponse";

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
          <MultipleChoiceResponse />
        </form>
      </div>
    );
  }
}

export default Question;
