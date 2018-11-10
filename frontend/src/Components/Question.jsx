import React, { Component } from "react";
import OpenTextResponse from "./OpenTextResponse";
import MultipleChoiceResponse from "./MultipleChoiceResponse";

const typeToComponentsMap = {
  openText: <OpenTextResponse />,
  multipleChioce: <MultipleChoiceResponse />,
};

class Question extends Component {
  state = {
    QuestionResponse: null,
  };

  constructor(props) {
    super(props);
    this.setQuestionComponent(props.type);
  }

  componentDidUpdate(newProps) {
    if (this.props.type !== newProps.type) {
      this.setQuestionComponent(newProps.type);
    }
    if (this.props.text !== newProps.text) {
      document.getElementById("questionForm").reset();
    }
  }

  render() {
    return (
      <div>
        <form id="questionForm">
          <p>{this.props.text}</p>
          <div>
            <input
              type="checkbox"
              id="verygood"
              name="verygood"
              value="verygood"
            />
            <label for="verygood">very good</label>
          </div>

          {this.state.QuestionResponse}
        </form>
      </div>
    );
  }

  setQuestionComponent = newType => {
    this.setState({
      QuestionResponse: typeToComponentsMap[newType],
    });
    console.log(newType);
  };
}

export default Question;
