import React, { Component } from "react";
import SurveyButton from "./SurveyButton";
const axios = require("axios");

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/surveys/", { crossdomain: true })
      .then(response => {
        let data = JSON.parse(response.data);
        console.log(data);
        this.setState({
          surveys: data.map((x, i) => {
            return {
              key: i,
              title: x.title,
            };
          }),
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  state = {
    surveys: [],
  };

  render() {
    return (
      <div className="content centered">
        <head>
          <title>Dashboard</title>
        </head>
        <body>

        <h2 className="display-3">Welcome, John Doe!</h2>
          <p>You have surveys to fill in:</p>
          <div className="d-flex flex-row justify-content-around">
            {this.state.surveys.map((item, index) => (
              <SurveyButton name={item.title} />
              // <p>{item}</p>
            ))}
          </div>
        </body>
      </div>
    );
  }
}

export default Dashboard;
