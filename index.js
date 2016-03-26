import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Main from './src/js/Main';
import Preview from './src/js/Preview';
import Logistics from './src/js/Logistics';
import Validate from './src/js/Validate';
import Login from './src/js/Login';
import Signup from './src/js/Signup';
import QrCodeGridList from './src/js/component/QrCodeGridList';

//Some components use react-tap-event-plugin to listen for touch events. 
//This dependency is temporary and will go away once react v1.0 is released. 
//Until then, be sure to inject this plugin at the start of your app.
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var app = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/preview" component={Preview}/>
    <Route path="/logistics" component={Logistics}/>
    <Route path="/validate" component={Validate}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/list" component={QrCodeGridList}/>
  </Router>
  ), app);