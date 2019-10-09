import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Divider,Rating } from 'semantic-ui-react'


class Leaderboard extends Component {

  render () {

    const { scores } = this.props

    return (

      <div className='ui centered cards'>

      {
    scores.map((user) => {

      return (

      <div className="ui card" key={user.user}>
      <div className="image"><img src={user.avatar} alt={`${user.name}'s avatar`}/></div>
      <div className="content">
        <div className="header">{user.name}</div>
      </div>
      <div className="content">
         <div className="header">Questions Answered: {user.answers}</div>
         <div className="header">Questions Asked: {user.questions}</div>
         <div className="header">Total Points: {user.total}</div>
         <Divider />
         <Rating icon='star' rating={user.total} maxRating={8} size='huge' disabled />
      </div>
       </div>
          )}
        )
       }

    </div>
      )
  }
}

function mapStateToProps ({users}) {

 let scores = Object.keys(users).map((key) => {

    return {
      'user': key,
      'name': users[key].name,
      'avatar': users[key].avatarURL,
      'answers': Object.keys(users[key].answers).length,
      'questions': users[key].questions.length,
      'total': Object.keys(users[key].answers).length + users[key].questions.length
    }

  }).sort(function(a, b) {
    return b.total - a.total
  })


  return {
    scores
  }
}

export default connect(mapStateToProps)(Leaderboard)
