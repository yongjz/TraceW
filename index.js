import React from 'react';
import ReactDOM from 'react-dom';
import Main from './src/js/main.js';
//import './src/css/font-roboto.css';

//Some components use react-tap-event-plugin to listen for touch events. 
//This dependency is temporary and will go away once react v1.0 is released. 
//Until then, be sure to inject this plugin at the start of your app.
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var app = document.getElementById('app');

ReactDOM.render(
  <Main />,
  app
);