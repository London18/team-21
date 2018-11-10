import React from "react";

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <p className="display-3">Thank you!</p>
        <p style={{fontSize:'20px'}}>
          A minute of your time is worth hours of autism research work. By filling out these surveys, you're helping us to
          improve the lives of people with autism all around the world.{" "}
        </p>
      </div>
    );
  }
}

export default Feedback;
