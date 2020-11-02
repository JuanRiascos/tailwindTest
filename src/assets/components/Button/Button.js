import React from 'react'

const Button = ({ name, topic, ...props }) => {

	const _handleSelectButton = () => {
    console.log(topic,' dasd');
		if (topic === 'main') {
			return (
				<button
					className='focus:outline-none font-bold hover:shadow-lg bg-blue-500 text-white active:bg-blue-600  uppercase text-sm px-6 py-3 rounded shadow  outline-none  mr-1 mb-1'
					type='button'
					{...props}>
					{name}
				</button>
			)
		}

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
	return <>{_handleSelectButton()}</>
}

export default Button
