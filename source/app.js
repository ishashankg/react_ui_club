var React = require('react');
var ReactDOM  = require('react-dom');
var reactClass = require('./components/ReactComponentState');
var TimerExample = require('./components/Timer');
var PropValidation = require('./components/PropValidation');
var Application = require('./components/Application');

var App = React.createElement(Application);
ReactDOM.render(App, document.getElementById('react-application'));
