import React, { Component } from "react";

class OpenTextResponse extends React.Component {
  render() {
    return (
      <textarea
        type="text"
        placeholder="Enter text..."
        style={{ height: "100pt" }}
      />
    );
  }
}

export default OpenTextResponse;
