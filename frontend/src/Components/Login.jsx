import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Login extends Component {
  state = { userid: "", remember: false };

  handleRememberChange = () => {
    this.setState({
      remember: !this.state.remember,
    });
  };

  handleSubmit = () => {
    if (this.state.remember) {
      localStorage.setItem("loggedIn", true);
    } else {
      sessionStorage.setItem("loggedIn", true);
    }
    this.props.history.push("/");
  };

  handleChange = event => {
    this.setState({ userid: event.target.value });
  };

  render() {
    return (
      <div>
        <head>
          <title>Login</title>
        </head>
        <body>
          <p>
            Welcome to Autistica Surveys! Here you can answer survey questions
            and contribute to austism research. Please enter your user id:
          </p>
          <p>
            <form onSubmit={this.handleSubmit}>
              <label>
                user ID:
                <input
                  type="text"
                  value={this.state.userid}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
              <p> </p>
              <input
                name="remember"
                type="checkbox"
                checked={this.state.remember}
                onChange={this.handleRememberChange}
              />{" "}
              Remember me
            </form>
          </p>
          {this.renderNoExistingId()}
        </body>
      </div>
    );
  }
  renderNoExistingId() {
    return (
      <div>
        <p>
          If you don't have an id, but want to participate,{" "}
          <Link to={`/registernoid/`}>click here to register.</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Login);
