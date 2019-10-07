import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/'
import Home from './Home';
import Login from './Login';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
      {
      this.props.loading === true
      ? <Login />
      :<Home />
      }
      </div>
    );
  }

}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
