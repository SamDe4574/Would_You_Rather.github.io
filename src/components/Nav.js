import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom'
import {unsetAuthedUser} from '../actions/authedUser'
import {connect} from 'react-redux'



class Nav extends Component {

  setUser = (e) => {
  e.preventDefault()
  this.props.dispatch(unsetAuthedUser())
  this.props.history.push('/')

}

  render() {

    const baselink = process.env.PUBLIC_URL
    return (
      <div className="ui pointing secondary menu">
          <NavLink to={`${baselink}/`} exact={true} activeClassName='active' className="item">
            Home
          </NavLink>
          <NavLink to={`${baselink}/New`} activeClassName='active' className="item">
            New Question
          </NavLink>
          <NavLink to={`${baselink}/leaderboard`} activeClassName='active' className="item">
            Leaderboard
          </NavLink>

          <div className="right menu">
            <button className="ui red basic button item" onClick={this.setUser}>Log out</button>
          </div>
      </div>
    );
  }

}

function mapStateToProps({authedUser, users}) {
  var userName = authedUser !== null
    ? users[authedUser].name
    : null

  return {authedUser, userName}
}

export default withRouter(connect(mapStateToProps)(Nav))
