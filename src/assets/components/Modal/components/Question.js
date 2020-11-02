import React from 'react'

const Question = ({ name, hasSelect, ...props }) => {
	return (
		<button
			{...props}
			className={`hover:shadow-lg border-2 focus:outline-none mb-2 outline-none p-2 rounded text-gray-500 text-xs-2 w-full ${
				hasSelect && 'border-blue-300'
			}`}
			type='button'>
			{name}
		</button>
	)
}

export default Question
