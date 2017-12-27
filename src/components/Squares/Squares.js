import React, { Component } from 'react';
import '../Square.css';
import '../../Container/Container.css';
import Square from '../Square';

class Squares extends Component {
  
	render() {
		return (
      	<div className="Container Container2x2">
      		<Square /><Square />
	         <Square /><Square />
      	</div>	
		);
	}
}

export default Squares;