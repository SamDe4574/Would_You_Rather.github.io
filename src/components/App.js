import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import QuestionDetails from './QuestionDetails';
import NotFound from './NotFound';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router basename={'/Would_you_rather'}>
        <div className='App'>
          {
            this.props.loading === true
            ? <Login />
            : <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/question/:id' component={QuestionDetails}/>
                <Route component={NotFound}/>
              </Switch>
          }
        </div>
      </Router>
    );
  }

}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
