import React from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'


const Property = ({ label, min, max, step, val, onChange, span }) => (
	<div className="property">
      <label>{label}</label>
      <InputRange 
         minValue={min} 
         maxValue={max} 
         step={step}
         value={val} 
         onChange={value => onChange(value, label)} 
      />
      <span>{span}</span>
   </div>
)

Property.propTypes = {
   label: PropTypes.string,
   min: PropTypes.number,
   max: PropTypes.number,
   step: PropTypes.number,
   val: PropTypes.number,
   onChange: PropTypes.func,
   span: PropTypes.string
}

export default Property