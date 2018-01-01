import React, {Component} from 'react';
import '../../App.css';
import './Container.css';
import Squares2x2 from '../Squares/Squares2x2/Squares2x2';
import Squares2x3 from '../Squares/Squares2x3/Squares2x3';
import Squares3x4 from '../Squares/Squares3x4/Squares3x4';
import Squares4x4 from '../Squares/Squares4x4/Squares4x4';
import '../Squares/Square.css';
import mixx from '../Squares/mixx';
import Timer from '../Timer/Timer';


class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			props: this.props,
			arrays: 
					[
						[1,1,2,2], 
						[1,1,2,2,3,3], 
						[1,1,2,2,3,3,4,4,5,5,6,6],
						[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
					]
		};
	}
	componentDidMount() {
		mixx(this.state.arrays);
	}
	
	render() {
		switch (this.state.props.mode){
	      case "xs": this.container = <Squares2x2 array={this.state.arrays[0]} />; break;
	      case "s": this.container = <Squares2x3 array={this.state.arrays[1]} />;	break;
	      case "m": this.container = <Squares3x4 array={this.state.arrays[2]} />; break;
	      case "l": this.container = <Squares4x4 array={this.state.arrays[3]} />; break;
	   }
	   const setStyle = {
	   	'display': 'flex',
	   	'flexWrap': 'wrap',
	   	'flexDirection': 'column',
	   	'justifyContent': 'center'
	   };
		return(
			<div id="cont" style={setStyle}>
				<Timer props={this.state}></Timer>
				{this.container}
			</div>	
		);

	}
}

export default Container;
