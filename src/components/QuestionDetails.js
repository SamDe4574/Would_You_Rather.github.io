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

      return (<div>
        <h1>Question Details</h1>
        <div>
          <h3>
            {users[author].name}
            asks
          </h3>
          <div>
            <img src={this.props.users[author].avatarURL} alt={`${this.props.users[author].name}'s avatar`} className="avatar"/>
            <hr/>
            <div>
              {
                answered === true && (<div>
                  <h3>Results</h3>
                  <Stats option={optionOne.text} optionCount={optionOneVotes} totalOfVotes={totalOfVotes} chosen={answer}/>
                  <p>{answer}</p>

                  <Stats option={optionTwo.text} optionCount={optionTwoVotes} totalOfVotes={totalOfVotes} chosen={!answer}/>
                </div>)
              }
              {
                answered === false && (<div>
                  <h3>Would you rather...</h3>
                  <form>
                    <label>
                      <input type="radio" name="options" value='optionOne' checked={this.state.selectedOption === "optionOne"} onChange={this.updateCategory}/> {optionOne.text}
                    </label>
                    <label>
                      <input type="radio" name="options" value='optionTwo' checked={this.state.selectedOption === "optionTwo"} onChange={this.updateCategory}/> {optionTwo.text}
                    </label>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                  </form>
                </div>)
              }

            </div>
          </div>
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
