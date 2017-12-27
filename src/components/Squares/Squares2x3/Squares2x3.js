import React, { Component } from 'react';
import '../Square.css';
import '../../Container/Container.css';
import Square from '../Square';

class Squares2x3 extends Component {
  	constructor(props) {
  		super(props);
  		this.state = {array: this.props.array};
  	}
	render() {
		console.log(this.state.array);
		return (
      	<div className="Container Container2x3">
      		<Square /><Square />
	         <Square /><Square />
	         <Square /><Square />
      	</div>	
		);
	}
}

export default Squares2x3;