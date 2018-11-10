import React, { Component } from "react";
import Question from "./Question";
import Feedback from "./Feedback";
import { Line, Circle } from "rc-progress";

class Survey extends Component {
  state = {
    questions: [
      {
        text: "How are you feeling?",
        type: "openText",
      },
      {
        text: "How was your day?",
        type: "multipleChioce",
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

  finish = () => {
    document.location.href = "/";
  };

  render() {
    let question = this.state.questions[this.state.index];

    return (
      <React.Fragment>
        {this.state.index < this.state.questions.length && (
          <p style={{ textAlign: "center" }}>
            Question {this.state.index + 1} of {this.state.questions.length}
          </p>
        )}
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <Line
            percent={(100 * this.state.index) / this.state.questions.length}
            strokeWidth="1.5"
            trailWidth="1.5"
            strokeColor="#2db7f5"
          />
        </div>
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
          <div>
            <Feedback />
            <input
              type="button"
              id="submit"
              onClick={this.finish}
              value="Finished"
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Survey;
