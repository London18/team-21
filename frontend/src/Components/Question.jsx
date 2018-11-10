import React, { Component } from "react";
import OpenTextResponse from "./OpenTextResponse";
import MultipleChoiceResponse from "./MultipleChoiceResponse";
import ScaleResponse from "./ScaleResponse";
import PropTypes from "prop-types";

const typeToResponseComponentMap = {
  openText: <OpenTextResponse />,
  multipleChioce: <MultipleChoiceResponse />,
  scale: <ScaleResponse />,
};

class Question extends Component {
  constructor(props) {
    super(props);
  }

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
          {this.getQuestionComponent(this.props.type)}
        </form>
      </div>
    );
  }

  getQuestionComponent = type => {
    return typeToResponseComponentMap[type];
  };
}

Question.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Question;
