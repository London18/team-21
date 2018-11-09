import React, { Component } from "react";

class Survey extends Component {
  render() {
    return (
      <div>
        <head>
          <title>Survey</title>
        </head>
        <body>
          <p>How are you feeling today?</p>
          <div>
            <input
              type="radio"
              id="verygood"
              name="verygood"
              value="verygood"
            />
            <label for="verygood">very good</label>
          </div>
          <div>
            <input type="radio" id="good" name="good" value="good" />
            <label for="good">good</label>
          </div>
          <div>
            <input type="radio" id="poor" name="poor" value="poor" />
            <label for="poor">poor</label>
          </div>
          <input type="submit" />
        </body>
      </div>
    );
  }
}

export default Survey;
