import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'
import Stats from './Stats'
import {Route} from 'react-router-dom'
import NotFound from './NotFound';


class QuestionDetails extends Component {
  state = {
    selectedOption: 'optionOne'
  }
  updateCategory = (e) => {
    const val = e.target.value
    this.setState(() => ({selectedOption: val}))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {selectedOption} = this.state
    const {authedUser, id, dispatch} = this.props

    dispatch(handleSaveQuestion(authedUser, id, selectedOption))

  }

  render() {
    if (this.props.question === undefined) {
      return <Route component={NotFound}/>
    } else {
      const {users, question, answered, authedUser} = this.props
      const {author, optionOne, optionTwo} = question
      const optionOneVotes = question.optionOne.votes.length
      const optionTwoVotes = question.optionTwo.votes.length
      const totalOfVotes = optionOneVotes + optionTwoVotes
      const answer = question.optionOne.votes.includes(authedUser)

      return (
        <div className='ui card centered column grid'>
        <div className='row'>
        <h1>Question Details</h1>
        </div>

        <div className='row'>
        <img src={this.props.users[author].avatarURL} alt={`${this.props.users[author].name}'s avatar`} className="ui small image"/>
        </div>

          <h3>{users[author].name}</h3>
          <div className="content">
              {
                answered === true && (
                <div className='ui centered'>
                  <h3>Results</h3>

                  <Stats option={optionOne.text} optionCount={optionOneVotes} totalOfVotes={totalOfVotes} chosen={answer}/>
                  <br />
                  <Stats option={optionTwo.text} optionCount={optionTwoVotes} totalOfVotes={totalOfVotes} chosen={!answer}/>
                </div>
              )
              }
              {
                answered === false && (
                  <form className="ui form">
                    <div className="ui grey header">
                      Would you rather :
                    </div>
                    <div className="field">
                      <div className="ui radio">
                        <input type="radio" className="hidden"  name="options" value='optionOne' checked={this.state.selectedOption === "optionOne"} onChange={this.updateCategory}/>
                        <label className='ui blue header'> {optionOne.text}</label>
                      </div>
                    </div>
                    <div className="field">
                      <div className="ui radio">
                        <input type="radio" className="hidden"  name="options" value='optionTwo' checked={this.state.selectedOption === "optionTwo"} onChange={this.updateCategory}/>
                        <label className='ui green header'> {optionTwo.text}</label>
                      </div>
                    </div>
                    <button className='ui positive button fluid' type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
              )}
            </div>


      </div>)
    }
  }
}
function mapStateToProps({
  users,
  questions,
  authedUser
}, props) {
  const {id} = props.match.params

  const question = questions[id]

  if (questions[id]) {
    const answered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
      ? true
      : false
    return {question: question, users, answered, id, authedUser}
  }else{
    return {question}
  }
}

export default connect(mapStateToProps)(QuestionDetails)
