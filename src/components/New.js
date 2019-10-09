import React, { Component } from 'react';
import {connect} from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom'
import { Button, Divider, Form, TextArea } from 'semantic-ui-react';




class New extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }
  handleChange = (e) => {
    if (e.target.name === 'optionOne') {
      const optionOne = e.target.value
      this.setState(() => ({optionOne}))
    } else {
      const optionTwo = e.target.value
      this.setState(() => ({optionTwo}))
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {optionOne} = this.state
    const {optionTwo} = this.state

    const {dispatch} = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({optionOne, optionTwo, toHome: true}))

  }
  render() {
    const {optionOne, optionTwo, toHome} = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div className="ui card centered column grid">
        <div className="row">
        <h3>Would You Rather</h3>
        </div>

        <div className="row">
            <Form onSubmit={this.handleSubmit}>

             <Form.Field>
               <TextArea
               placeholder="Enter the first option"
               value={optionOne}
               onChange={this.handleChange}
               name="optionOne"
               maxLength={280}
               />
             </Form.Field>

             <Divider horizontal>Or</Divider>

             <Form.Field>
               <TextArea
               placeholder="Enter the second option"
               value={optionTwo}
               onChange={this.handleChange}
               name="optionTwo"
               maxLength={280}
               />
             </Form.Field>

               <Button
               fluid
               positive
               type='submit'
               disabled={optionOne === '' || optionTwo === ''}
               >Submit</Button>

               </Form>
             </div>

           </div>
    );
  }

}

export default connect()(New)
