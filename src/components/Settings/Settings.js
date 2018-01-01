import React, {Component} from 'react';
import Container from '../Container/Container';
import '../../App.css';
import './Settings.css';

class Null extends Component {
	render(){
		return <div />;
	}
}
class Settings extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	timeOut: 0, 
    	timer: 60000,
    	route: window.location.hash.substr(1)
    }
    this.mode = "";
  }

   componentDidMount() {
	   window.addEventListener('hashchange', () => {
	      this.setState({
	        route: window.location.hash.substr(1)
	      })
	   });
    	this.settings = document.getElementsByClassName('Settings')[0];
   	this.return = document.getElementById('return');
   	this.point = document.getElementById('point');
   }

	handleShow = (event) => {
    	this.setState({timeOut: event.target.value});

   }

   handleTimer = (event) => {
    	this.setState({timer: event.target.value});
   }

   handleMode = (event) => {
   	event.target.focus();
   	this.mode = event.target.id;
   	this.point.classList.remove('block');
   }

   handleSet = () => {
	   this.settings.style.display = 'none';
	   this.return.style.display = 'flex';

   }

   handleSettings = () => {
   	this.settings.style.display = 'block';
   	this.return.style.display = 'none';

   }

	render() {
		const { timeOut, timer, route } = this.state;
		let Child;

		switch(this.state.route) {
			case '/container': Child = Container; break;
			case '/settings': Child = Null;
			default: Child = Null;
		}

		const containerStyle = {
	   	'display': 'flex',
	   	'flexWrap': 'wrap',
	   	'flexDirection': 'column',
	   	'justifyContent': 'space-between',
	   	'marginTop': '50px'
	   };
	   const mode = this.mode;
		return (
			<div style={containerStyle}>	
		      <div {...this.props } className="Settings">
		      	<h1>Settings</h1>
		      	<div className="property">
			      	<label>Time of showing pictures</label><br />
			      	<input type = "range" onChange={this.handleShow}  min="0" max="5000" step="1000" /> <br />
			      	<span>{timeOut/1000} seconds</span>
			      </div>
		      	<div className="property">	
			      	<label>Game timer</label><br />
			      	<input type = "range" onChange={this.handleTimer}  min="60000" max="300000" step="60000" /> <br />
			      	<span>{timer/60000} minutes</span>
			      </div>
			      <div className="property">	
			      	<label>Game mode</label><br />
			      	<input type="button" id="xs" onClick={this.handleMode} value="2x2"/>
						<input type="button" id="s" onClick={this.handleMode} value="2x3"/>
						<input type="button" id="m" onClick={this.handleMode} value="3x4"/>
						<input type="button" id="l" onClick={this.handleMode} value="4x4"/>
			      </div>
			      <div title="Choose the game mode please">	
			      	<a id="point" className="block" href="#/container" ><button id="start" onClick={this.handleSet}>Set</button></a>
			      </div>
		      </div>
		      <Child props={this.state} mode={mode} />
		      <div id="return">	
			      	<a href="#/settings"><button id="start" onClick={this.handleSettings}>Settings</button></a>
			   </div>
		   </div>
		);
	}
}

export default Settings;