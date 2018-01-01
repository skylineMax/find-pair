import React, { Component } from 'react';
import '../Square.css';
import '../../Container/Container.css';
import modalFunc from '../../Modal/modalFunc.js';
import Modal from '../../Modal/Modal.js';

class Squares3x4 extends Component {
	constructor(props) {
    super(props);
    this.last_img = 0; 
    this.clicks = 0;
      this.state = { 
        click_flag: 1, 
        click: 0, 
        level: 0, 
        img_root: '/img/',
        array: this.props.array
      };
      this.handleClick = this.handleClick.bind(this);
 }
  

   handleClick = (e) => {
       const square = e.target;
       if (e.target.getAttribute('data-state') === '0' && this.state.click_flag === 1) {
           if (this.state.click === 0) { 
              this.clicks++;
               this.state.click = 1;
               this.last_img = e.target.getAttribute('data-id');
               square.setAttribute('data-state', '1');
               square.style.backgroundImage = 'url(' + this.state.img_root + this.last_img + '.jpg';
           } else { 
               if (this.last_img === e.target.getAttribute('data-id')) {
                 this.clicks++;
                   let id = e.target.getAttribute("data-id");
                   let imgs = document.querySelectorAll(`[data-id="${id}"]`);
                   let visible = Array.prototype.slice.call(imgs);
                   visible.map((item) => {
                       item.setAttribute('data-state', '2');
                       item.style.backgroundImage = 'url(' + this.state.img_root + this.last_img + '.jpg';
                   });


               } else {
                this.clicks++;
                   square.setAttribute('data-state', '1');
                   square.style.backgroundImage = 'url(' + this.state.img_root + square.getAttribute('data-id') + '.jpg';

                   this.setState({click_flag: 0});
                   setTimeout((state) => {
                       const arr = document.querySelectorAll('.Square');
                       arr.forEach((item) => {
                          if (item.getAttribute('data-state') === '1') {
                            item.setAttribute('data-state', '0');
                            item.style.backgroundImage = 'none';
                          }
                       });
                       this.setState({click_flag: 1});
                   }, 1000);
               }
               this.setState({click: 0});
            }
         }
}
  
	render() {
    const clicks  = this.clicks;
		return (
      	<div className="Container Container3x4 block" data-clicks={clicks}>
      		{this.state.array.map((id,i) => {
      			return <div className="Square" key={'a' + i} onClick={this.handleClick} data-id={id} data-state="0" /> })}
      	</div>	
		);
	}
}

export default Squares3x4;