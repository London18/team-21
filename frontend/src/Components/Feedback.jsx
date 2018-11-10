import React, { Component } from "react";

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <p className="display-3">Thank you!</p>
        <p className="display-4">
          You've contributed x hours to autism research. You've helped us to
          improve the lives of people with autism all around the world.{" "}
        </p>
        <b className="display-4">You've earned 50 points</b>
      </div>
    );
  }
}

export default Feedback;
