import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  makeDiv(div){
      return div;
  }
  state = {'visibility': 'hidden'};
  handleClick  = (event) => {
    const target = event.target.id;
    console.log(target);
    if (this.state.visibility === 'hidden') {
      this.setState({'visibility': 'visible'});  
    } else {this.setState({'visibility': 'hidden'});} 
  } 
  
	render() {
    const {visibility} = this.state;
		return (
      this.makeDiv(
        <div onClick={this.handleClick} className="Square">
          <img style={{visibility}} src="http://www.inspiresport.com/wp-content/uploads/2017/09/Logo.jpg" alt="" />
        </div>)
		);
	}
}

export default Square;