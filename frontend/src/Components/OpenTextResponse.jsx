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
  get() {
    return document.getElementById("opentextinput").value;
  }
  render() {
    return (
      <textarea
        id="opentextinput"
        type="text"
        placeholder="Enter text..."
        style={{ height: "100pt" }}
        onChange={this.handleTextChange}
      />
    );
  }
}

export default OpenTextResponse;
