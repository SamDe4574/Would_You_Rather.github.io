import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class User extends Component {
  setUser = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.props.id))
  }
  render() {
    return (
      <div className="ui card">
  <div className="image"><img src={this.props.avatar} alt={`${this.props.name}'s avatar`}/></div>
  <div className="content">
    <div className="header">{this.props.name}</div>
  </div>
  <div className="extra content">
    <button className="ui green basic button" onClick={this.setUser} >Login As {this.props.name}</button>
  </div>
</div>
    )
  }
}

function mapStateToProps({authedUser,users}, {id}) {
  const user = users[id]
  return {authedUser, name: user.name, avatar: user.avatarURL}
}

export default connect(mapStateToProps)(User)
