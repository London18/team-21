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
          <div className="centered">
            <h2 className="display-3"> Welcome to Autistica Surveys!</h2>
            <p>Please enter your user id:</p>
            <p>
              <form onSubmit={this.handleSubmit}>
                <label>
                  user ID:
                  <input
                    type="text"
                    className=""
                    value={this.state.userid}
                    onChange={this.handleChange}
                  />
                </label>
                &nbsp;
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Submit"
                />
                <br />
                <input
                  name="remember"
                  type="checkbox"
                  checked={this.state.remember}
                  onChange={this.handleRememberChange}
                />
                &nbsp;Remember me
              </form>
            </p>
          </div>
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
