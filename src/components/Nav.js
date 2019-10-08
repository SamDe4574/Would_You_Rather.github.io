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
      <nav>
      <ul id='nav'>
        <li className="logout">
          <button onClick={this.setUser}>Log out</button>
        </li>
        <li>
          <span>Hello, {this.props.userName}!</span>
        </li>
        <li>
          <NavLink to={`${baselink}/leaderboard`} activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to={`${baselink}/New`} activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to={`${baselink}/`} exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>

      </ul>
    </nav>
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
