import React from 'react'

const Button = ({ name, topic, ...props }) => {
	return (
		<button
			{...props}
			className={`${
				topic ? 'button--yellow text-white' : 'text-gray-500 border-2'
			} focus:outline-none font-bold hover:shadow-lg mb-2 outline-none p-2 py-3 rounded rounded-lg text-sm w-full`}>
			{name}
		</button>
	)
}

export default Button
