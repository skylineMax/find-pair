import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Timer from '../components/Timer'
import Square from '../components/Square'
import { connect } from 'react-redux'
import * as timerActionCreators from '../actions/timer'
import * as imgActionCreators from '../actions/img'
import { chunk } from 'lodash'

class Container extends Component {
 
	handleClickTimer = (rows, cols) => {
		const { running, time, showTime, timerActions } = this.props
		if (running || time === 0) {
			timerActions.stop(time)
		} else {
			timerActions.start(rows, cols, showTime)
		}
	}

	handleClickSquare = (image, index) =>{
		const { images, click, running, time } = this.props
		const { toggleImage, stayDisplayed, stayHidden } = this.props.imgActions
		if (click !==2){
			if(running && time !== 0 || image.visible ) {
				toggleImage(index, click)
			}
		}
	}

	isFullfilled = (click, images) => {
		const { stayDisplayed, stayHidden } = this.props.imgActions
		const { stop } = this.props.timerActions
		const { time, yourTime } = this.props
		if (click === 2) {
			let temp = []
			images.forEach((image, i) => { 
				if (image.status === 'displayed') 
					temp.push(image.src)
			})
			const compare = (a) => {
				return !a.some(b => (b !== a[0]))
			}
			(compare(temp)) ? stayDisplayed() : setTimeout(() => stayHidden(), 400)
			if (images.every((image) => image.visible === true )) {
				stop(time)
				alert('CONGRATULATIONS! YOU WIN! YOUR TIME = ' + yourTime + ' SECONDS')
			}
		}
	}
   
	componentWillUnmount() {
		const { running, time, timerActions, imgActions } = this.props;
      if (running) timerActions.stop(time)
		timerActions.reset()
		imgActions.resetImages()
	}

	componentWillReceiveProps(nextProps) {
		const { timerActions} = this.props
		if (nextProps.time === 1){
			timerActions.stop(0)
			alert('GAME OVER! YOU LOOSE!')
		}
	}
	componentDidUpdate() {
		const { images, click } = this.props
		if (click === 2) this.isFullfilled(click,images)
	}

	field = (images, rows, cols) => {
		let newImages = images.map((image, i) => (
				<Square
					onClick={() => this.handleClickSquare(image,i)}
					key={i}
					image={image}
				/>
		))
		return chunk(newImages, rows).map((rows, idx) => {
			let row = rows.map(image => {
				return image
			})
			return(
				<div className="row" key={idx}>
					{row}
				</div>
			)
		})
	}
	render() {
		const { rows, cols, time, running, images, timerActions} = this.props
		return(
			<Fragment key="container">
					<Timer 
						onClick={() => this.handleClickTimer(rows, cols)}
						time={time}
						running={running}
					/>
					<div className="container">
						{this.field(images, rows, cols)}
					</div>
					<Link to="/">
						<button id="back">Back</button>
					</Link>
			</Fragment>	
		)
	}
}

Container.propTypes = {
	rows: PropTypes.number,
	cols: PropTypes.number,
	time: PropTypes.number,
	running: PropTypes.bool,
	images: PropTypes.array, 
	timerActions: PropTypes.object,
	imgActions: PropTypes.object
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    timerActions: bindActionCreators(timerActionCreators, dispatch),
    imgActions: bindActionCreators(imgActionCreators, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Container)
