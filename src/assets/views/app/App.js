import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
function App() {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className='flex h-full items-center justify-center w-full'>
			<div className='fixed button__helped'>
				<Button name='Cancelar el servicio' topic='main' type='button' onClick={() => setShowModal(true)} />
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
