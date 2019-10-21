import React, { Component } from 'react';
import { connect } from 'react-redux'

import { login } from 'actions/user.actions'
import LoginForm from 'components/auth/login-form/LoginForm';

class Login extends Component {
  render() {
    return (
      <LoginForm loginUser={ this.props.login } />
    );
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    login: (email, password) => dispatch(login(email, password)),
  }
}

export default connect(null, mapDispatchToProps)(Login)
