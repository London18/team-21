import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Login extends Component {
  state = { userid: "", remember: false };

  render() {
    return (
      <div>
        <head>
          <title>Login</title>
        </head>
        <body>
          <p>
            <h1> Welcome to Autistica Surveys! Please enter your User ID:</h1>
          </p>
          <p>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  value={this.state.userid}
                  onChange={this.handleUserIdChange}
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
    localStorage.setItem("userID", this.state.userid);
    this.props.history.push("/");
  };

  handleUserIdChange = event => {
    this.setState({ userid: event.target.value });
  };
}

export default withRouter(Login);
