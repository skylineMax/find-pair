import React, {Component} from 'react';
import Squares2x2 from '../../Squares2x2';


class Mode extends Component {


	render(){
		return(
			<div>
				<Squares2x2 />
				<Squares2x3 />
				<Squares3x4 />
				<Squares4x4 />
			</div>
		);
	}
}

export default Mode; 