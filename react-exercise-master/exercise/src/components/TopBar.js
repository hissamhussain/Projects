import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

export default class TopBar extends Component {
 

  render() {
    const but =  this.props.loggedIn ? (
      <div>
          <h1 style={{margin:0,padding:8,float:'left'}}>HH</h1>
          
          <Button handleclick={this.props.handleclick} style={{backgroundColor: 'red', color: 'white'}}>Logout</Button>
      </div>
    ) : (
      <div>
        <Button handleclick={this.props.handleclick} style={{backgroundColor: 'blue', color: 'white'}}>Login</Button>
        <Button style={{backgroundColor: 'red', color: 'white'}}>Signup</Button>
      </div>
    )
    return (
      <header style={{
        height:          48,
        width:           '100%',
        backgroundColor: 'rgb(102,63,180)',
        color:           'white',
        padding:         '6px 10px',
        display:         'flex',
        flexDirection:   'row',
        alignItems:      'center'
      }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        <div style={{float: 'right', paddingRight: 20}}>
          {but}
        </div>
      </header>
    );
  } 
}

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};



