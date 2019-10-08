import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Question extends Component {
  render() {
    const { id, question: {optionOne, optionTwo} } = this.props

    return (
      <div>
      <Link to={`/question/${id}`}>
          <p> Would you rather &nbsp;
            <span>{optionOne.text}</span>
            &nbsp;OR&nbsp;
            <span>{optionTwo.text}</span>
          </p>
      </Link>
      </div>
    )
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id]
  return {
    id,
    question
  }
}

export default connect(mapStateToProps)(Question)
