import React, { Component } from "react";
import Question from "./Question";
import Feedback from "./Feedback";
import { Line, Circle } from "rc-progress";

class Survey extends Component {
  state = {
    questions: [
      {
        text: "How are you feeling?",
        type: "scale",
      },
      {
        text: "How was your day?",
        type: "scale",
      },
      {
        text: "Third question?",
        type: "scale",
      },
    ],
    index: 0,
  };

  nextQuestion = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }));
  };

  render() {
    let question = this.state.questions[this.state.index];

    return (
      <React.Fragment>
        {this.state.index < this.state.questions.length ? (
          <div>
            <Question text={question.text} type={question.type} />
            <input
              type="button"
              id="submit"
              onClick={this.nextQuestion}
              value="Submit"
            />{" "}
          </div>
        ) : (
          <Feedback />
        )}
        <Line
          percent={(100 * this.state.index) / this.state.questions.length}
          strokeWidth="1"
          strokeColor="#2db7f5"
        />
      </React.Fragment>
    );
  }
}

export default Survey;
