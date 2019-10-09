import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'

class Login extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="centered row">
        <h1>Pick a user</h1>
        </div>
        <div className="ui centered cards row">
            {this.props.users.map((id) => (<User id={id} key={id}/>))}
        </div>
      </div>
    );
  }
}
function mapStateToProps({authedUser, users}) {
  return {authedUser, users: Object.keys(users)}
}

export default connect(mapStateToProps)(Login)
