import React from 'react'
import PropTypes from 'prop-types'


const Square = ({ onClick, image }) => (
	<div className="square" onClick={onClick}>
		{ image.visible && <img src={image.src} alt="" /> }
	</div>
)

Square.propTypes = {
	onClick: PropTypes.func,
	image: PropTypes.object
}

export default Square