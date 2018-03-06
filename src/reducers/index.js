import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'
   
const initialState = {
	showTime: 0,
	time: 10,
	rows: 2,
	cols: 2,
	images: [],
	click: 0,
	running: false,
	yourTime:0
}

const reducer = ( state = initialState, action) => {
	switch(action.type) {
		case types.CHOOSE_SHOW_TIME:
			return {
				...state,
				showTime: action.showTime
			}
		case types.CHOOSE_TIME:
			return {
				...state,
				time: action.time
			}
		case types.SET_ROWS: 
			return {
				...state,
				rows: action.rows
			}
		case types.SET_COLS: 
			return {
				...state,
				cols: action.cols
			}
		case 'TIMER_START':
			return {
				...state,
				running: !state.running,
				showTime: 0
			}
		case 'DISPLAY_ALL':
			return {
				...state, 
				images: state.images.map(image =>({...image, visible: true, status: 'displayed'}))
			}
		case 'HIDE_ALL':
			return {
				...state, 
				images: state.images.map(image =>({...image, visible: false, status: 'hidden'}))
			}
		case 'MAKE_FIELD':
			return {
				...state,
				images: action.images.map((src, i) => ({src, visible: false, status: 'hidden'})),
			}
		case 'TOGGLE_IMAGE':
			return {
				...state,
				images: state.images.map((image, index) => {
					if (action.index === index) {
						if (image.status === 'hidden' || image.status === 'stayHidden') 
							return {...image, visible: true, status: 'displayed'}
						else if (image.status === 'stayDisplayed') 
							return image
						else
							return image
					} else return image
				}),
				click: (!state.images[action.index].visible || !action.click) ? action.click + 1 : action.click
			}
		case 'STAY_DISPLAYED':
			return {
				...state,
				click: 0,
				images: state.images.map((image) => 
					image.status === 'displayed' 
					? {...image, visible: true, status: 'stayDisplayed'}
					: image
				)
			}
		case 'STAY_HIDDEN':
			return {
				...state,
				images: state.images.map((image) => 
					(image.status !== 'stayDisplayed' && image.status !== 'hidden')
					? {...image, visible: false, status: 'stayHidden'}
					: image
				),
				click: 0
			}
		case 'RESET_IMAGES': 
			return initialState
		case types.TIMER_STOP:
			return {
				...state,
				running: !state.running,
				time: action.time
			}
		case types.TIMER_TICK:
			return {
				...state,
				time: state.time - 1,
				yourTime: state.yourTime + 1
			}
		case types.TIMER_RESET: 
			return initialState
		default: 
			return state
	}

}

export default reducer