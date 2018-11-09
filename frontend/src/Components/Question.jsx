import React, { Component } from "react";

class Question extends Component {
  componentDidUpdate(newProps) {
    if (this.props.text !== newProps.text) {
      document.getElementById("questionForm").reset();
    }
  }
  render() {
    return (
      <div>
        <form id="questionForm">
          <p>{this.props.text}</p>
          <div>
            <input
              type="checkbox"
              id="verygood"
              name="verygood"
              value="verygood"
            />
            <label for="verygood">very good</label>
          </div>
          <div>
            <input type="checkbox" id="good" name="good" value="good" />
            <label for="good">good</label>
          </div>
          <div>
            <input type="checkbox" id="poor" name="poor" value="poor" />
            <label for="poor">poor</label>
          </div>
        </form>
      </div>
    );
  }
}

export default Question;
