import React, {Component} from 'react';
import '../../App.css';
import '../Container/Container.css';
import Squares2x2 from '../Squares/Squares2x2/Squares2x2';
import Squares2x3 from '../Squares/Squares2x3/Squares2x3';
import Squares3x4 from '../Squares/Squares3x4/Squares3x4';
import Squares4x4 from '../Squares/Squares4x4/Squares4x4';
import SquaresX from '../Squares/SquaresX';
import '../Squares/Square.css';

class Settings extends Component {
	constructor() {
		super();
		this.state = {level: 1};
	}

	chooseLevel = (e) => {
		this.setState({level: e.target.id});
		
	};

	render() {

		switch (this.state.level){
	      case "1":
	        this.container = <Squares2x2 array={[1,2,3,4]} />;
	        //this.container = <Squares2x2 />
	       	break;
	      case "2":
	        this.container = <Squares2x3 array={[1,2,3,4,5,6]} />;
	       	break;
	      case "3":
	        this.container = <Squares3x4 />;
	       	break;
	      case "4":
	        this.container = <Squares4x4 />;
	        break;
	      case "5":
	        this.container = <SquaresX name="1"/>;
	        break;
	      default:
	        this.container = <Squares2x2 />;
	   }
		
	   const setStyle = {
	   	'display': 'flex',
	   	'flexWrap': 'wrap',
	   	'justifyContent': 'space-around',
	   	'marginTop': '50px'
	   };
		return(
			<div>
				{this.container}
				<div style={setStyle}>
					<input type="button" id="1" onClick={this.chooseLevel} value="2x2"/>
					<input type="button" id="2" onClick={this.chooseLevel} value="2x3"/>
					<input type="button" id="3" onClick={this.chooseLevel} value="3x4"/>
					<input type="button" id="4" onClick={this.chooseLevel} value="4x4"/>
					<input type="button" id="5" onClick={this.chooseLevel} value="X"/>
				</div>
			</div>	
		);

	}
}

export default Settings;