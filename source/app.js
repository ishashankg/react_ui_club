var React = require('react');
var ReactDOM  = require('react-dom');
var reactClass = require('./components/ReactComponentState');
var TimerExample = require('./components/Timer');

var reactComponentElement = React.createElement(reactClass);
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

ReactDOM.render(  <TimerExample start={Date.now()} />, document.getElementById('timer'));
