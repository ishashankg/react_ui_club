var React = require('react');
var ReactDOM  = require('react-dom');
var reactClass = require('./components/ReactComponentState');

var reactComponentElement = React.createElement(reactClass);
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
