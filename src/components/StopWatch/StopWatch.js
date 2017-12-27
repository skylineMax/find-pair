import React, { Component } from 'react';
import '../../App.css';

class StopWatch extends Component {
    state = { time: 0, isRunning: false, timeOut: 0 };
    handleClick = () => {
            this.setState(state => {
            	setTimeout(() => {
                if (state.isRunning) {
                    clearInterval(this.timer);
                } else {
                    const startTime = Date.now() - this.state.time;

                    this.timer = setInterval(() => {
                        this.setState({ time: Date.now() - startTime });
                    });
                } }, this.state.timeOut);
                return { isRunning: !state.isRunning };

            });
       
    };

    handleChange = (e) => {
    	this.setState({timeOut: e.target.value});
    }

    render() {
        const { time, isRunning, timeOut } = this.state;
        return ( 
        	<div style = { { textAlign: 'center' } } >
            <input type = "button" onClick = { this.handleClick } value = { isRunning ? 'Stop' : 'Start' }/> <br / >
            <input type = "range" onChange={this.handleChange}  min="0" max="5000" step="1000" />
            <span> { timeOut/1000 }sec </span>
            <span > { time } ms < /span> 
         </div>
        );
    }
}

export default StopWatch;