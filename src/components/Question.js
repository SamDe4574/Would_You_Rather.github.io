import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Question extends Component {
  render() {
    const { users,question,id, question: {optionOne, optionTwo} } = this.props

    return (
      <div className="ui card centered">
  <div className="content">
    <img alt='avatar' src={users[question.author].avatarURL} className="ui mini right floated image" />
    <div className="header">{users[question.author].name} Ask </div>
    <div className="meta">Would you rather</div>
    <div className="description">
      {optionOne.text} <strong>OR</strong> {optionTwo.text}
    </div>
  </div>
  <div className="extra content">
    <div className="ui one buttons ">
      <Link to={`/question/${id}`}>
        <button className="ui button">View Question</button>
      </Link>
    </div>
  </div>
</div>

    )
  }
}


function mapStateToProps({ users,questions }, { id }) {
  const question = questions[id]
  return {
    id,
    question,
    users
  }
}

export default connect(mapStateToProps)(Question)
