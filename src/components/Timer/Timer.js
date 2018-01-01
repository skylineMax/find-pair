import React, { Component } from 'react';
import '../../App.css';
import modalFunc from '../Modal/modalFunc';
import Modal from '../Modal/Modal';
import '../Container/Container.css';

class Timer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         props: this.props.props.props.props,
         timer: this.props.props.props.props.timer, 
         seconds: 0,
         isRunning: false,
         click: 0
      };
   }

   componentWillUnmount() {
      clearInterval(this.tick);
   }

    tickFunction = () => {
      this.setState(state => {
         if(state.isRunning){
            state.timer = state.timer - 1000;
            state.seconds = state.seconds + 1;
         } else {
            clearInterval(this.tick);
         }
         return {timer: state.timer, seconds: state.seconds};
      });
      if(this.state.timer === 0) {
         clearInterval(this.tick);
         modalFunc(this.arr);
      }
      let stateArr = [];
      for (let i = 0; i <= this.arr.length - 1; i++) {
         let state = this.arr[i].dataset.state;
         if (state === '2') {
            stateArr.push(state);  
         }
         if (stateArr.length === this.arr.length) {
            clearInterval(this.tick);
            this.state.isRunning = false;
            modalFunc(this.arr,this.state.seconds, this.container.getAttribute('data-clicks'));
            this.state.seconds = 0;
         }
      }
   }

   componentDidMount() {
      this.arr = Array.prototype.slice.call(document.getElementsByClassName('Square'));
      this.container = document.getElementsByClassName('Container')[0]
   }

    handleClick = () => {
      this.setState(state => {
         let ids = []; 
         if(this.state.props.timeOut !== 0  && this.state.click === 0) {
                  this.arr.forEach((item)=>{
                     ids.push(item.getAttribute('data-id'))
                  })
                  this.state.click++;
                  this.arr.forEach((item,i) => {
                        item.style.backgroundImage = 'url(/img/' + ids[i] + '.jpg';
                  });
                  setTimeout(() => {
                  this.arr.forEach((item,i) => {
                     item.style.backgroundImage = 'none';
                  });
                  this.tick = setInterval(this.tickFunction, 1000);
               }, this.state.props.timeOut);
                  this.container.classList.remove('block');
         } else {
            if (this.state.isRunning) {
               this.container.classList.add('block');
               clearInterval(this.tick);

            } else {
               this.container.classList.remove('block');
               this.tick = setInterval(this.tickFunction, 1000);
               
            
            }}
         return {isRunning: !this.state.isRunning};
      });      
    }

   render() {
      const setStyle = {
         'margin': '25px 0',
         'textAlign':'center'
      }
        const {isRunning, timer} = this.state;
        return ( 
        	<div style = {setStyle} >
            <Modal/>
            <input type="button" onClick={this.handleClick}  value={isRunning ? 'Stop' : 'Start'}/>
            <div>
               <h1>Time remaining</h1>
               {timer/1000} seconds
            </div>
         </div>
        );
   }
}

export default Timer;