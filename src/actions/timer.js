import {
	TIMER_START,
	TIMER_TICK,
	TIMER_STOP,
   TIMER_RESET,
   DISPLAY_ALL,
   HIDE_ALL
} from '../constants/ActionTypes'

let timer = null;

export const start = (rows, cols, showTime) => (dispatch) => {
   clearInterval(timer)
   if (showTime) {
      dispatch(displayAll())
      setTimeout(() => {
         dispatch(hideAll())
         timer = setInterval(() => dispatch(tick()), 1000)
      }, showTime*1000)
   } else {
      timer = setInterval(() => dispatch(tick()), 1000)
   }
   dispatch({ type: TIMER_START,  showTime })
   
}

const displayAll = () => ({type: DISPLAY_ALL})

const hideAll = () => ({type: HIDE_ALL})

const tick = () => ({type: TIMER_TICK})

export const stop = (time) => {
   clearInterval(timer);
   return { type: TIMER_STOP, time };
}

export const reset = () => ({
	type: TIMER_RESET
})