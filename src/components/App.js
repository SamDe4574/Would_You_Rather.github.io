import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
      </div>
    );
  }

}


export default connect()(App)
