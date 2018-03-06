import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Property from '../components/Property'
import * as settingsActionCreators from '../actions/settings'
import { shuffle, times } from 'lodash'

class Settings extends Component {

   handleField = (rows, cols, showTime) => {
		const { makeField } = this.props.settingsActions
   	let field = rows*cols
		let images = shuffle([...times(field/2), ...times(field/2)]).map(index => 
			`assets/svg/${index}.svg`
		)
		makeField(images, showTime)
	}
	
	handleChange = (value, type) => {
		const { chooseShowTime, chooseTime, setRows, setCols } = this.props.settingsActions

		switch(type) {
			case 'Display time':
				chooseShowTime(value)
				break
			case 'Game timer':
				chooseTime(value)
				break
			case 'Cols':
				setCols(value)
				break
			case 'Rows':
				setRows(value)
				break
			default:
				null
		}
	}

	render() {
		const { showTime, time, rows, cols } = this.props
		const data = [
			{ label: 'Display time', min: 0, max: 5, step: 1, val: showTime, span: 'seconds'},
			{ label: 'Game timer', min: 0, max: 300, step: 1, val: time, span: 'seconds'},
			{ label: 'Rows', min: 2, max: 6, step: 1, val: rows, span: 'rows'},
			{ label: 'Cols', min: 2, max: 6, step: 1, val: cols, span: 'cols'}
		]
		return (
	      <div className="settings">
	      	<h1>Settings</h1>
				{data.map((property,i) => (
					<Property
						key={i}
						label={property.label}
						min={property.min}
						max={property.max}
						step={property.step}
						val={property.val}
						onChange={this.handleChange}
						span={property.span}
					/>
				))}
		      <div>
					<Link 
						to={(rows*cols)%2!==0 ? "/" :"/game"} 
						onClick={(rows*cols)%2!==0 
							? () => (alert('set another values'))
							: () => this.handleField(rows, cols, showTime)
						}
					>
						<button id="start">Set</button>
					</Link>
		      </div>
		      
	      </div>
		);
	}
}

Settings.propTypes = {
	showTime: PropTypes.number,
	time: PropTypes.number,
	rows: PropTypes.number,
	cols: PropTypes.number,
	settingsActions: PropTypes.object
}

const mapStateToProps = (state) => ({
	...state
})

const mapDispatchToProps = (dispatch) => ({
    settingsActions: bindActionCreators(settingsActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)