import React, { Component } from 'react';
import './Square.css';


class Square extends Component {

  makeDiv(div){
      return div;
  }
  
	render() {
		return (this.makeDiv(<div className="Square" {...this.props}></div>));
	}
}

export default Square;