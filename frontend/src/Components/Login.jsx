import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Login extends Component {
  state = { userid: '', remember: false };

  render() {
    return (
      <div>
        <head>
          <title>Login</title>
        </head>
        <body>
          <p>
            <h1> Welcome to Autistica Surveys! Please enter your user id:</h1>
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
              />{' '}
              <h3>Remember me</h3>
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
          If you don't have an id, but want to participate,{' '}
          <Link to={`/registernoid/`}>click here to register.</Link>
        </p>
      </div>
    );
  }

  handleRememberChange = () => {
    this.setState({
      remember: !this.state.remember
    });
  };

  handleSubmit = () => {
    if (this.state.remember) {
      localStorage.setItem('loggedIn', true);
    } else {
      sessionStorage.setItem('loggedIn', true);
    }
    this.props.history.push('/');
  };

  handleUserIdChange = event => {
    this.setState({ userid: event.target.value });
  };
}

export default withRouter(Login);
