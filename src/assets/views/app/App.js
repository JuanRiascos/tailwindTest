import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
function App() {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className='flex h-full items-center justify-center w-full'>
			<div className='fixed button__helped'>
				<button
					className='bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
					type='button'
					style={{ transition: 'all .15s ease' }}
					onClick={() => setShowModal(true)}>
					Cancelar servicio
				</button>
			</div>

			{showModal && (
				<Modal
					title={'¿Deseas cancelar tu servicio?'}
					subTitle={'¿Cuentanos por qué vas a cancelar tu servicio?'}
					setActive={setShowModal}
				/>
			)}
		</div>
	)
}

export default App
