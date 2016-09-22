var React = require('react');
var ReactDOM  = require('react-dom');
var reactClass = require('./components/ReactComponentState');
var TimerExample = require('./components/Timer');
var PropValidation = require('./components/PropValidation');

var reactComponentElement = React.createElement(reactClass);
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

var PropValidationElement = React.createElement(PropValidation);
ReactDOM.render(PropValidationElement, document.getElementById('react-application'));
