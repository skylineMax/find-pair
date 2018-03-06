import React from 'react';
import PropTypes from 'prop-types'

const Timer = ({onClick, time, running})=> {
   return ( 
      <div id="timer" >
         <input type="button" onClick={onClick}  value={running ? 'Pause' : 'Start'}/>
         <div>
            <h1>Time remaining</h1>
            {time === 1 ? 1 : time} seconds
         </div>
      </div>
   )
}

Timer.propTypes = {
   onClick: PropTypes.func,
   time: PropTypes.number,
   running: PropTypes.bool
}

export default Timer