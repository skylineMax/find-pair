import React, {Component} from 'react';
import '../../App.css';
import '../Container/Container.css';
import Square from '../Square/Square';
import '../Square/Square.css';

class Settings extends Component {
	state = {level: 1};

	chooseLevel = (event) => {
		this.setState({level: event.target.id});
	};


	render() {
		const {level} = this.state;
		switch (level){
	      case "1":
	        this.container = 
	          <div className="Container Container2x2">
	            <Square /><Square />
	          	<Square /><Square />
	          </div>;
	       	break;
	      case "2":
	        this.container = 
	          <div className="Container Container2x3">
	            <Square /><Square />
	            <Square /><Square />
	            <Square /><Square />
	          </div>;
	       	break;
	      case "3":
	        this.container = 
	          <div className="Container Container3x4">
	          	<Square /><Square /><Square /><Square />
		          <Square /><Square /><Square /><Square />
		          <Square /><Square /><Square /><Square />
	          </div>;
	       	break;
	      case "4":
	        this.container = 
	        <div className="Container Container4x4">
	          <Square /><Square /><Square /><Square />
	          <Square /><Square /><Square /><Square />
	          <Square /><Square /><Square /><Square />
	          <Square /><Square /><Square /><Square />
	        </div>;
	        break;
	      default:
	      	this.container = 
	          (<div className="Container Container2x2">
	            <Square /><Square />
	          	<Square /><Square />
	          </div>);
	   }
	   const square3x4 = {
	   	'width': '80px',
			'height': '80px'
	   };
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
				</div>
			</div>	
		);

	}
}

export default Settings;