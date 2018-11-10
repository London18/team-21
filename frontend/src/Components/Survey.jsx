import React, { Component } from "react";
import Question from "./Question";
import Feedback from "./Feedback";
import { Line, Circle } from "rc-progress";
const axios = require("axios");

class Survey extends Component {
  constructor(props) {
    super(props);
    axios
      .get("http://localhost:8000/surveys/", { crossdomain: true })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
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
      {
        text: "Fourth question",
        type: "scale",
      },
      {
        text: "Fifth question?",
        type: "scale",
      },
      {
        text: "Sixth question",
        type: "multipleChoice",
      },
    ],
    index: 0,
    submitEnabled: false,
  };

  nextQuestion = () => {
    //we send the current question answer to the server
    /*axios
      .post("http://localhost:8000/surveys/ (and the server title!)", {
        crossdomain: true
        //surveyTitle:
        //answer:
        //type:
        //username:
      //})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });*/
    this.setState(prevState => ({
      index: prevState.index + 1,
      submitEnabled: false,
    }));
  };

  finish = () => {
    document.location.href = "/";
  };

  render() {
    return (
      <React.Fragment>
        {this.state.index < this.state.questions.length && (
          <p style={{ textAlign: "center" }}>
            Question {this.state.index + 1} of {this.state.questions.length}
          </p>
        )}
        {this.renderProgressBar()}
        {this.state.index < this.state.questions.length
          ? this.renderQuestion()
          : this.renderFeedback()}
      </React.Fragment>
    );
  }

  renderProgressBar = () => {
    return (
      <div>
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <Line
            percent={(100 * this.state.index) / this.state.questions.length}
            strokeWidth="1.5"
            trailWidth="1.5"
            strokeColor="#2db7f5"
          />
        </div>
        <img src="./images/sss.png" style={{ height: "60px" }} />
      </div>
    );
  };

  renderQuestion = () => {
    let question = this.state.questions[this.state.index];
    return (
      <div>
        <Question
          text={question.text}
          type={question.type}
          onValidInput={this.handleQuestioninput(true)}
          onInvalidInput={this.handleQuestioninput(false)}
        />
        <input
          type="button"
          id="submitSurvey"
          onClick={this.nextQuestion}
          value="Submit"
          disabled={!this.state.submitEnabled}
        />{" "}
      </div>
    );
  };

  handleQuestioninput = valid => () => {
    this.setState({
      submitEnabled: valid,
    });
  };

  renderFeedback = () => {
    return (
      <div>
        <Feedback />
        <input
          type="button"
          id="submit"
          onClick={this.finish}
          value="Finished"
        />
      </div>
    );
  };
}

export default Survey;
