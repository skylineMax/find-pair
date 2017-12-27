import React, { Component } from 'react';
import '../Square.css';
import '../../Container/Container.css';
import Square from '../Square';

class Squares3x4 extends Component {
  
	render() {
		return (
      	<div className="Container Container3x4">
      		<Square /><Square /><Square /><Square />
      		<Square /><Square /><Square /><Square />
	         <Square /><Square /><Square /><Square />
      	</div>	
		);
	}
}

export default Squares3x4;