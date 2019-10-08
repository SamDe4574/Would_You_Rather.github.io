import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import { Link } from 'react-router-dom'

class User extends Component {
  setUser = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.props.id))
  }
  render() {
    return (
      <a href="#user" onClick={this.setUser} className='tweet'>
        <img src={this.props.avatar} alt={`${this.props.name}'s avatar`} className="avatar"/>
        <span>{this.props.name}</span>
      </a>
    )
  }
}

function mapStateToProps({authedUser,users}, {id}) {
  const user = users[id]
  return {authedUser, name: user.name, avatar: user.avatarURL}
}

export default connect(mapStateToProps)(User)
