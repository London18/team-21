import React, { Component } from "react";
import Question from "./Question";
import Feedback from "./Feedback";
import { Line } from "rc-progress";
import StarRow from "./StarRow";
const axios = require("axios");

class Survey extends Component {
  state = {
    questions: [],
    index: 0,
    submitEnabled: false,
  };

  componentDidMount() {
    let name = this.props.match.params.name;
    axios
      .get("http://localhost:8000/surveys/" + name, { crossdomain: true })
      .then(response => {
        let data = JSON.parse(response.data);
        let parsedData = data.map((x, i) => {
          return {
            key: i,
            text: x.qtext,
            type: x.qtype,
            id: x.id,
          };
        });
        this.setState({ questions: parsedData });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  nextQuestion = response => {
    let questionAnswer = this.questionComponent.getAnswer();

    console.log(localStorage.getItem("numberOfStars"))

    if (this.state.index >= this.state.questions.length - 1) {
      localStorage.setItem(
        "numberOfStars",
        parseInt(localStorage.getItem("numberOfStars")) + 1,
      );
    }
    //we send the current question answer to the server
    axios
      .post("http://localhost:8000/surveys/" + this.props.match.params.name, {
        crossdomain: true,
        surveyTitle: this.props.match.params.name,
        answer: questionAnswer,
        type: this.state.questions[this.state.index].type,
        questionId: this.state.questions[this.state.index].id,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    localStorage.setItem(
      "numberOfQuestions",
      parseInt(localStorage.getItem("numberOfQuestions")) + 1,
    );

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
        <StarRow
          totalStars="3"
          filledStars={localStorage.getItem("numberOfStars")}
        />
        {this.state.index < this.state.questions.length && (
          <p style={{ textAlign: "center" }} >
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
      </div>
    );
  };

  renderQuestion = () => {
    let question = this.state.questions[this.state.index];
    return (
      <div>
        <Question
          ref={r => (this.questionComponent = r)}
          id={question.id}
          text={question.text}
          type={question.type}
          onValidInput={this.handleQuestioninput(true)}
          onInvalidInput={this.handleQuestioninput(false)}
        />
        <input
          type="button"
          className="btn btn-success"
          id="submitSurvey"
          onClick={this.nextQuestion}
          value="Submit"
          disabled={!this.state.submitEnabled}
        />{" "}
      </div>
    );
  };

  renderSubmit = () => {
    return (
      <input
        type="button"
        id="submitSurvey"
        onClick={this.nextQuestion}
        value="Submit"
        disabled={!this.state.submitEnabled}
      />
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
        <img src="../images/sss.png" alt="star" style={{ height: "60px" }} />
        <Feedback />
        <input
          type="button"
          className="btn btn-success"
          id="submit"
          onClick={this.finish}
          value="Finished"
        />
      </div>
    );
  };
}

export default Survey;
