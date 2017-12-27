import React, { Component } from 'react';
import '../Square.css';
import '../../Container/Container.css';
import Square from '../Square';

class Squares4x4 extends Component {
  
	render() {
		return (
      	<div className="Container Container4x4">
      		<Square /><Square /><Square /><Square />
      		<Square /><Square /><Square /><Square />
	         <Square /><Square /><Square /><Square />
	         <Square /><Square /><Square /><Square />
      	</div>	
		);
	}
}

export default Squares4x4;