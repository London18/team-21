import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ex
            alias eos atque, quasi est fuga commodi dolorem mollitia hic numquam
            debitis blanditiis natus a. Quidem in debitis at earum.
          </p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Your ID:
              <input
                type="text"
                value={this.state.userid}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
            <input
              name="remember"
              type="checkbox"
              checked={this.state.remember}
              onChange={this.handleRememberChange}
            />
          </form>
        </body>
      </div>
    );
  }
}

export default withRouter(Login);
