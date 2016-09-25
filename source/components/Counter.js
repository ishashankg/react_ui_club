var React = require('react');

var Counter = React.createClass({

    getDefaultProps: function(){
       console.log('getDefaultProps');

       return {};
    },

    getInitialState:function(){
      console.log('getInitialState');

      return{};
    },

    componentWillMount : function(){
      console.log('componentWillMount');
    },

    componentDidMount : function(){
      console.log('componentDidMount');
    },

    componentWillReceiveProps : function(){
      console.log('componentWillReceiveProps');
    },

    shouldComponentUpdate : function(){
      console.log('shouldComponentUpdate');

      return true;
    },

    componentDidUpdate : function(){
      console.log('componentDidUpdate');
    },

    componentWillUnmount : function(){
      console.log('componentWillUnmount');
    },

    render : function(){
      console.log('render');

      return(
        <h1 className="text-muted">Counter : {this.props.value} </h1>
      )
    }
});

module.exports = Counter;
