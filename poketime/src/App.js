import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import './App.css';

class App extends Component {



  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/:post_id' component={Posts}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
