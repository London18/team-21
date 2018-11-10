import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = { userid: '', remember: false };

  handleRememberChange = () => {
    this.setState({
      remember: !this.state.remember
    });
  };

  handleSubmit = () => {
    if (this.state.remember) {
      localStorage.setItem('loggedIn', true);
    }
    this.props.history.push('/');
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
        <h1> Welcome to Autistica Surveys! Please enter your user id:</h1></p><p>
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
              /> <h3>Remember me</h3>
          </form></p>
        </body>
      </div>
    );
  }
}

export default withRouter(Login);
