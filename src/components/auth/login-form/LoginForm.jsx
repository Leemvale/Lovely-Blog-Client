import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = (email, password) => {
    this.props.loginUser(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="form">
        <input type="email" name="email" className="form-control" placeholder="email" value={ email } onChange={ this.handleChange } />
        <input type="password" name="password" className="form-control" placeholder="password" value={ password } onChange={ this.handleChange }/>
    
        <button type="button" className="submit-btn lovely-btn btn btn-primary" onClick={ () => this.handleSubmit(email, password) }>
          Log In
        </button>
      </form>
    );
  }
}


export default LoginForm;