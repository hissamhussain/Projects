import React, {Component} from 'react';
import Button from './Button';
export default class HomeContent extends Component {
  render() {

    const but = this.props.loggedIn ? (
      <div>
        <Button handleclick={this.props.handleclick}>Logout</Button>
      </div>
    ) : (
      <div>
        <Button handleclick={this.props.handleclick}>Login</Button>
      </div>
    )

    return (
      <div>
        {but}
      </div>
    );
  }
}
