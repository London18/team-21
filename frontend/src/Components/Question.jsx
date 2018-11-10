import React, { Component } from "react";
import OpenTextResponse from "./OpenTextResponse";
import MultipleChoiceResponse from "./MultipleChoiceResponse";
import ScaleResponse from "./ScaleResponse";
import PropTypes from "prop-types";

const typeToResponseComponentMap = {
  open_text: OpenTextResponse,
  multiple_choice: MultipleChoiceResponse,
  scale: ScaleResponse,
};

class Question extends Component {
  render() {
    return (
      <div>
        <form id="questionForm" onChange={this.onSelect}>
          <p className="display-4">{this.props.text}</p>
          {this._getQuestionComponent(this.props.type)}
        </form>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      document.getElementById("questionForm").reset();
    }
  }

  onSelect = () => {
    if (this.props.type !== "openText") this.props.onValidInput();
  };

  _getQuestionComponent = type => {
    return React.createElement(typeToResponseComponentMap[type], {
      ref: r => (this.responseComponent = r),
      onValidInput: this.props.onValidInput,
      onInvalidInput: this.props.onInvalidInput,
    });
  };

  getAnswer = () => {
    return this.responseComponent.get();
  };
}

Question.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Question;
