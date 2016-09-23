var React = require('react');

var ReactClass = React.createClass({
	getInitialState: function(){
		return {
			isHeaderHidden : false,
			title : "Stateful React Component"
		};
	},

	handleClick : function(){
		this.setState({
			isHeaderHidden : !this.state.isHeaderHidden
		});
	},

	render : function(){
		if(this.state.isHeaderHidden){
			return (
					<div>
							<input type="button" class='btn btn-default' onClick={this.handleClick} value='Toggle Header'></input>
					</div>
			);
		}
		return (
			<div>
				<h1 class='header'>{this.state.title}</h1>
				<input type="button" class='btn btn-default' onClick={this.handleClick} value='Toggle Header'></input>
			</div>
		);
	}
});

module.exports = ReactClass;
