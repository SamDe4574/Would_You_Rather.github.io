import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser,unsetAuthedUser} from '../actions/authedUser'

const AUTHED_ID = null

export function handleInitialData() {
  return(dispatch) => {
    return getInitialData()
            .then(({users,questions}) => {
              dispatch(receiveUsers(users))
              dispatch(receiveQuestions(questions))
              dispatch(setAuthedUser(AUTHED_ID))
            })
  }

}
