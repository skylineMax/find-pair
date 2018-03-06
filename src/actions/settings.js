import {
	CHOOSE_SHOW_TIME,
	CHOOSE_TIME,
	SET_ROWS,
	SET_COLS,
	MAKE_FIELD
} from '../constants/ActionTypes'

export const chooseShowTime = (showTime) => ({
	type: CHOOSE_SHOW_TIME,
	showTime
})

export const chooseTime = (time) => ({
	type: CHOOSE_TIME,
	time
})

export const setRows = (rows) => ({
	type: SET_ROWS,
	rows
})

export const setCols = (cols) => ({
	type: SET_COLS,
	cols
})

export const makeField = (images, showTime) => ({
	type: MAKE_FIELD,
	images,
	showTime
})