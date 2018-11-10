import React, { Component } from "react";
import SurveyButton from "./SurveyButton";

class Dashboard extends Component {
  state = {
    surveys: [{ key: 1, name: "survey1" }, { key: 2, name: "survey2" }],
  };

  render() {
    return (
      <div>
        <p>You have surveys to fill in</p>
        <div>
          {this.state.surveys.map((item, index) => (
            <SurveyButton name={item.name} />
            // <p>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
