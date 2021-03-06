import React, { Component } from "react";
import FormErrors from './formErrors';
import { Route, Redirect } from 'react-router'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      formErrors: { name: '', email: '', password: '' },
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    })
  }

  validateField(inputName, value) {
    let fieldValidationErrors = this.state.formErrors;
    switch (inputName) {
      case 'name':
        this.state.nameValid = value.length > 0;
        fieldValidationErrors.name = this.state.nameValid ? '' : 'is required';
        break;
      case 'email':
        this.state.emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = this.state.emailValid ? '' : 'is invalid';
        break;
      case 'password':
        this.state.passwordValid = value.length >= 8;
        fieldValidationErrors.password = this.state.passwordValid ? '' : 'is too short';
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: this.state.nameValid,
      emailValid: this.state.emailValid,
      passwordValid: this.state.passwordValid,
    }, this.validateForm)
  }

  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid });
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = 'https://conduit.productionready.io/api/' + 'users';
    let param = {
      user: {
        username: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      }
    }
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
      .then(res => {
        <Redirect to="/" />
      })
      .catch(error => console.log('Fetch data error', error));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul className="error-messages">
          <FormErrors formErrors={this.state.formErrors}></FormErrors>
        </ul>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            name="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </fieldset>
        <button type="submit" className="btn btn-lg btn-primary pull-xs-right" disabled={!this.state.formValid}>
          Sign up
        </button>
      </form>
    );
  }
}
export default Form;