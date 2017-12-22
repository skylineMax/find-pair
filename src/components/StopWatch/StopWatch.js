import React, {Component} from 'react';
import '../../App.css';

class StopWatch extends Component {
	state = { time: 0, isRunning: false };
	runClick = () => {
		this.setState(state => {
			if(state.isRunning) {
				clearInterval(this.timer);
			} else {
				const startTime = Date.now() - this.state.time;

				this.timer = setInterval(() => {
						this.setState({time: Date.now() - startTime});
				});
			}
			return {isRunning: !state.isRunning};
		});
	};

	render() {
		const {time, isRunning} = this.state;
		return(
			<div style={{textAlign: 'center'}}>
				<input type="button" onClick={this.runClick} value={isRunning ? 'Stop' : 'Start'} /><br />
				<span>{time}ms</span>
			</div>
		);
	}
}

export default StopWatch;