import React, { Component } from "react";
import OpenTextResponse from "./OpenTextResponse";
import MultipleChoiceResponse from "./MultipleChoiceResponse";
import ScaleResponse from "./ScaleResponse";
import PropTypes from "prop-types";

const typeToResponseComponentMap = {
  open_text: OpenTextResponse,
  multipleChoice: MultipleChoiceResponse,
  scale: ScaleResponse,
};

class Question extends Component {
  constructor(props) {
    super(props);
  }

  get = () => {
    return this.responseComponent.get();
  };

  componentDidUpdate(prevProps) {
    console.log(prevProps.id);
    if (this.props.id !== prevProps.id) {
      document.getElementById("questionForm").reset();
    }
  }

  onSelect = () => {
    if (this.props.type !== "openText") this.props.onValidInput();
  };

  render() {
    return (
      <div>
        <form id="questionForm" onChange={this.onSelect}>
          <p className="display-4">{this.props.text}</p>
          {this.getQuestionComponent(this.props.type)}
        </form>
      </div>
    );
  }

  getQuestionComponent = type => {
    return React.createElement(typeToResponseComponentMap[type], {
      ref: r => (this.responseComponent = r),
      onValidInput: this.props.onValidInput,
      onInvalidInput: this.props.onInvalidInput,
    });
  };
}

Question.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Question;
