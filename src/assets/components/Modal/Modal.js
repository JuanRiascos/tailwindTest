import React, { useEffect, useState } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { question } from '../../../redux/services/Question/Actions'

import Banner from '../../image/banner.png'
import Question from './components/Question'
import Button from '../Button/Button'
import { setMessage } from '../../../common/utils/Message'

const Index = ({ title, subTitle, setActive }) => {
	const dispatch = useDispatch()
	const { questions } = useSelector((state) => state.question)
	const [canQuestions, setQuestions] = useState([])

	const _handleActive = () => {
		setActive(false)
	}

	const _handleSelected = (index) => {
		let canSelected = [...canQuestions]
		canSelected = initState(canSelected)
		canSelected[index].isSelect = true
		console.log('Question selected  ', canSelected[index].name)
		setQuestions(canSelected)
	}

	const initState = (array) => {
		return array.map((item) => ({ ...item, isSelect: false }))
	}

	const _handleContinue = () => {
		setMessage('Alerta', 'Ha tomado una excelente decisión, seguir con nosotros', 'info')
		setActive(false)
	}

	const _handleCancel = () => {
		const canSelected = canQuestions.find((item) => item.isSelect === true)
		console.log(canSelected)
		if (canSelected) {
			setMessage('Alerta', 'Gracias por utilizar nuestro servicio, ha seleccionado la siguiente causa: '+canSelected.name, 'info')
			setActive(false)
			return
		}
		setMessage('Error', 'Por favor debe de seleccionar un motivo', 'error')
	}

	useEffect(() => {
		dispatch(question.getAll())
	}, [dispatch])

	useEffect(() => {
		if (questions) setQuestions(questions)
	}, [questions])

	return (
		<>
			<div
				className={
					'animation-up justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
				}>
				<div className='relative w-auto my-6 mx-auto modal__container'>
					<div className='border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<img src={Banner} alt='' className='absolute rounded-t-3xl' />
						<div className='modal__close absolute flex items-start justify-between z-10 rounded-t'>
							<button
								className='bg-transparent bg-white border-0 flex float-right focus:outline-none font-semibold h-8 hover:bg-gray-100 hover:shadow-lg items-center justify-center leading-none ml-auto opacity-5 outline-none rounded-2xl w-8'
								onClick={_handleActive}>
								<FontAwesomeIcon className='text-gray-500 text-xl' icon={faTimes} />
							</button>
						</div>
						<div className='flex-auto pt-6 relative text-center px-8'>
							<p className='font-bold text-lg'>{title}</p>
							<p className='my-3 text-gray-600 text-xs'>{subTitle}</p>
						</div>
						<div className='bg-white mt-1 mx-5 p-3 rounded-2xl shadow-lg z-10'>
							{canQuestions.map((item, index) => (
								<Question
									key={index}
									name={item.name}
									onClick={() => _handleSelected(index)}
									hasSelect={item.isSelect}
								/>
							))}
						</div>
						<div className='flex items-center flex-col justify-end p-6 rounded-b'>
							<Button
								type='button'
								topic='submmit'
								name='Continuar con mi servicio'
								onClick={_handleContinue}
							/>
							<Button type='button' name='Cancelar el servicio' onClick={_handleCancel} />
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black' />
		</>
	)
}

export default Index
