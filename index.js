import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Main from './src/js/main.js';
import Preview from './src/js/Preview';
import Example from './src/js/example';
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
    <Route path="/example" component={Example}/>
    <Route path="/list" component={QrCodeGridList}/>
    
  </Router>
  ), app);