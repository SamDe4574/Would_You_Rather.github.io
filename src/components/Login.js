import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'

class Login extends Component {
  render() {
    return (
      <div className='tweet'>
        <h1>Pick a user</h1>
        <ul>
          {this.props.users.map((id) => (
              <li key={id}><User id={id}/></li>
            ))
          }
        </ul>
      </div>
    );
  }
}
function mapStateToProps({authedUser, users}) {
  return {authedUser, users: Object.keys(users)}
}

export default connect(mapStateToProps)(Login)
