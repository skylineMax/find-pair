import {
	TOGGLE_IMAGE,
	STAY_DISPLAYED,
	STAY_HIDDEN,
   RESET_IMAGES
} from '../constants/ActionTypes'


export const toggleImage = (index, click)  => ({
		type: TOGGLE_IMAGE,
		index,
		click
}) 

export const stayDisplayed = () => ({
	type: STAY_DISPLAYED
})

export const stayHidden = () => ({
	type: STAY_HIDDEN
})

export const resetImages = () => ({
	type: RESET_IMAGES
})

