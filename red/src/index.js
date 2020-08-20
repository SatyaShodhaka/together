import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

import notfound from './notfound';
import profile from './profile';



const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/profile" component={profile} />
      <Route component={notfound} />
    </Switch>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root'),
);

