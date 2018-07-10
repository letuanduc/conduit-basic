import React, { Component } from 'react';
import Form from '../../components/form';
class SignUp extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <a href="">Have an account?</a>
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
