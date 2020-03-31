import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import UserList from './components/UserList';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserDetail from './routes/UserDetail';

ReactDOM.render((
  <BrowserRouter>
    <div>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/UserList" component={UserList}/>
      <Route exact path="/:id" component={UserDetail}/>
    </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
