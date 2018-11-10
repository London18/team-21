import React, { Component } from "react";

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <p>Thank you!</p>
        <p>
          You've contributed x hours to autism research. You've helped us to
          improve the lives of people with autism all around the world.{" "}
        </p>
        <b>You've earned xyz points, your garden is growing!</b>
      </div>
    );
  }
}

export default Feedback;
