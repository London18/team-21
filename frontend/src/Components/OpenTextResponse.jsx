import React, { Component } from "react";

class OpenTextResponse extends React.Component {
  handleTextChange = event => {
    if (event.target.value.length > 0) {
      document.getElementById("submitSurvey").disabled = false;
      this.props.onValidInput();
    } else {
      this.props.onInvalidInput();
    }
  };
  render() {
    return (
      <textarea
        type="text"
        placeholder="Enter text..."
        style={{ height: "100pt" }}
        onChange={this.handleTextChange}
      />
    );
  }
}

export default OpenTextResponse;
