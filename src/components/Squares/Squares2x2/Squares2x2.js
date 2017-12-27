import React, { Component } from 'react';
import '../Square.css';
import '../../Container/Container.css';
import Square from '../Square';


class Squares2x2 extends Component {
	 constructor() {
	     super();
	     this.last_img; //Последняя показанная картинка
	     this.img_root = '/img/'; //Путь к папке с картинками
	     this.click_flag = 1;
	     this.state = { click_flag: 1, count_click: 0 };
	     this.count_click = 0; //Кол-во кликов
	     this.arrayOfImages = [1, 1, 2, 2]; //Массив расположения картинок
	     this.mixedArrayOfImages = this.mix(this.arrayOfImages);
	     this.arrayOfSquares = [];
	     //this.dataState;
	 }
	 mix(arrToMix) {
	     var index, valueIndex;
	     for (var i = 0; i <= arrToMix.length - 1; i++) {
	         index = Math.floor(Math.random() * i);
	         valueIndex = arrToMix[index];
	         arrToMix[index] = arrToMix[i];
	         arrToMix[i] = valueIndex;
	     }
	     return arrToMix;
	 }

	 makeSquares(props) {
	     const ids = props.ids;
	     this.arrayOfSquares = ids.map((id, index) =>
	         <Square key = { index + 1 } data-id = { id } data-state = "0" onClick = { this.handleClick2 }/>
	     );
	     return this.arrayOfSquares;
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
	                         //console.log(item.getAttribute('data-state'))
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


	 render() {
	     const ids = this.mixedArrayOfImages;
	     //console.log(this.mix(this.arrayOfImages));
	     //(()=> {alert("vse ok");})();
	     return (<div className = "Container Container2x2" > 
	     				{ this.makeSquares({ ids }) }
	     			 </div>	
	     );
	 }
}

export default Squares2x2;