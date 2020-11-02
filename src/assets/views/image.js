import React from 'react'

const image = ({ name, ...props }) => {
	const _handleSelectPath = {
		login: require('../image/banner.png'),
	}
	return <img src={_handleSelectPath[name]} {...props} alt={name} />
}

export default image
