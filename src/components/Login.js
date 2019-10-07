import React, { Component } from 'react';
import {connect} from 'react-redux';

class Login extends Component {
  render() {

    return (
      <center>
        <div >
          <h3>Login</h3>
        </div>
      </center>
    );
  }

}


export default connect()(Login);
