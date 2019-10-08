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
      <div className="ui centered two column grid">
        <div className="column">
          <center><h3>Questions</h3></center>
          <br/>
          <button
          className="ui toggle button fluid" aria-pressed={showAnswered}
            onClick={(e) => this.setState((prevState) => ({ showAnswered: !prevState.showAnswered }))}
          >
            {showAnswered === true ? 'Answered questions' : 'Unanswered questions'}
          </button>
          <br/>
          <div className="ui two column grid">
            <div className="row">
              {showAnswered
                ? answeredQuestionsIds.map((id) => (
                  <div className="column" key={id}>
                    <Question id={id} />
                    <br />
                  </div>
                ))
                : unansweredQuestionsIds.map((id) => (
                  <div className="column" key={id}>
                    <Question id={id} />
                    <br />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
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
