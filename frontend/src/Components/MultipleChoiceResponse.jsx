import React, { Component } from "react";

class MultipleChoiceResponse extends React.Component {
  render() {
    return (
      <input
        type="checkbox"
        placeholder="Enter text..."
        style={{ height: "100pt" }}
      />
    );
  }
}

export default MultipleChoiceResponse;
