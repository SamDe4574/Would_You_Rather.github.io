import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import QuestionDetails from './QuestionDetails';
import NotFound from './NotFound';
import New from './New';
import Leaderboard from './Leaderboard';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router basename={'/Would_you_rather'}>
        <div className='ui centered'>
          {
            this.props.loading === true
            ? <Login />
            :
            <div>
            <Nav />
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/question/:id' component={QuestionDetails}/>
                <Route path='/New' component={New}/>
                <Route path='/Leaderboard' component={Leaderboard}/>
                <Route component={NotFound}/>
            </Switch>
            </div>
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
