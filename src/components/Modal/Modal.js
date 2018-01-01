import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="modal" className="modal">
      			<div className="modal-content">
				    <input type="button" id="close" value="" />
				  </div>
      	</div>
		);
	}
}

export default Modal;