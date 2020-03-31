import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';

export default class Home extends Component {
  
  state= { loggedIn: false }

  changeState()
  {
    this.setState({
      
      loggedIn : !(this.state.loggedIn)
    })
  }
 
 
  render() {
    return (
      <div className="App">
        <TopBar loggedIn = {this.state.loggedIn}  handleclick={() => this.changeState()}/>
        <HomeContent loggedIn = {this.state.loggedIn}  handleclick={() => this.changeState()} />
      </div>
    );
  }
}

