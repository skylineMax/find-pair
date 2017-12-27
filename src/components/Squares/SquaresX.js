import React, { Component } from 'react';
import './Square.css';
import Square from './Square';
import mixx from './mixx';
import getState from './handleChooseLevel.js';


class SquaresX extends Component {
  constructor() {
         super();
         this.last_img; //Последняя показанная картинка
         this.img_root = '/img/'; //Путь к папке с картинками
         this.click_flag = 1;
         this.state = { click_flag: 1, count_click: 0, level: 0, array: [[1,1,2,2], [1,2,2,3,1,3]]};
         this.count_click = 0; //Кол-во кликов
         this.ARRAY = [[1,1,2,2],[1,2,4,2,3,1,3,4]];
         this.state2 = [[1,1,2,2], [1,2,2,3,1,3]];
  }

  handleClick2 = (e) => {
       const square = e.target;
       if (e.target.getAttribute('data-state') == '0' && this.state.click_flag == 1) {
           if (this.state.count_click == 0) { //Если первый клик по закрытому полю
               this.state.count_click++;
               this.last_img = e.target.getAttribute('data-id');
               square.setAttribute('data-state', '1');
               square.style.backgroundImage = 'url(' + this.img_root + this.last_img + '-big.jpg';
           } else {
               if (this.last_img == e.target.getAttribute('data-id')) {
                   let id = e.target.getAttribute("data-id");
                   let imgs = document.querySelectorAll(`[data-id="${id}"]`);
                   let bla = Array.prototype.slice.call(imgs);
                   bla.map((item) => {
                       item.setAttribute('data-state', '2');
                       item.style.backgroundImage = 'url(' + this.img_root + this.last_img + '-big.jpg';
                   });


               } else {
                   square.setAttribute('data-state', '1');
                   square.style.backgroundImage = 'url(' + this.img_root + square.getAttribute('data-id') + '-big.jpg';

                   this.state.click_flag = 0;
                   setTimeout((state) => {
                       const arr = document.querySelectorAll('.Square');
                       arr.forEach((item) => {
                          if (item.getAttribute('data-state') == '1') {
                            item.setAttribute('data-state', '0');
                            item.style.backgroundImage = 'none';
                          }
                       });
                       this.state.click_flag = 1;
                   }, 1000);
               }
               this.state.count_click = 0;
           }
       }
   }

    handleMixArray = () => {
      this.setState({array: mixx(this.state.array)});
    }

    handleChooseLevel = (e) => {
      this.setState({level: e.target.id});
    }
	render() {
    mixx(this.state2);
    console.log(this.state2);
    console.log(getState());
      switch (this.state.level) {
        case "1":
          this.container = this.state2[0].map((id, index) =>
            <Square key={index+1} data-id={id} data-state="0" onClick={this.handleClick2} {...this.props}/>)
          break;
        case "2":
          this.container = this.state2[1].map((id, index) =>
           <Square key={index+1} data-id={id} data-state="0" onClick={this.handleClick2} {...this.props}/>)
        default: console.log("pashet")
      }
    return ( 
      <div className = "Container Container2x2" > 
        {this.container}
        <input type="button" onClick={this.handleMixArray} value="MIX"/>
        <input type="button" id="1" onClick={this.handleChooseLevel} value="2x2"/>
        <input type="button" id="2" onClick={this.handleChooseLevel} value="2x3"/>
      </div>
		);
	}
}

export default SquaresX;