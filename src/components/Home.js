import React, { Component } from 'react';
import {connect} from 'react-redux';
import Question from './Question'



class Home extends Component {
  state = {
    showAnswered: false
  }

  render() {
    const { showAnswered } = this.state
    const {answeredQuestionsIds, unansweredQuestionsIds } = this.props

    return (
      <center>
        <div >
        <h3>Questions</h3>
        <button
          onClick={(e) => this.setState((prevState) => ({ showAnswered: !prevState.showAnswered }))}
          style = {{cursor:'pointer'}}
        >
          {showAnswered === true ? 'Answered questions' : 'Unanswered questions'}
        </button>
        <div>
          <ul>
          {showAnswered
            ? answeredQuestionsIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))
            : unansweredQuestionsIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      </center>
    );
  }

}



 function mapStateToProps ({ questions, authedUser }) {

  let unansweredQuestions = Object.values(questions).filter((question) =>
    !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

  let answeredQuestions = Object.values(questions).filter((question) =>
    question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))


  return {
    unansweredQuestionsIds: Object.values(unansweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
    answeredQuestionsIds: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
  }
}

export default connect(mapStateToProps)(Home);
