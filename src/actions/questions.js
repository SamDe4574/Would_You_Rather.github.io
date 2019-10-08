import {saveQuestionAnswer, saveQuestion} from '../utils/api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'




export function receiveQuestions(questions) {
  return{type: RECEIVE_QUESTIONS,questions}
}
function newQuestion(question) {
  return {type: SAVE_QUESTION_ANSWER, question}
}
function addQuestion(question) {
  return {type: ADD_QUESTION, question}
}

export function handleSaveQuestion(authedUser, qid, answer) {
  return(dispatch, getState) => {
    const {authedUser} = getState()

    return saveQuestionAnswer({authedUser, qid, answer}).then((question) => dispatch(newQuestion({authedUser, qid, answer})))
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return(dispatch, getState) => {
    const {authedUser} = getState()

    return saveQuestion({optionOneText, optionTwoText, author: authedUser}).then((question) => dispatch(addQuestion(question)))
  }
}
