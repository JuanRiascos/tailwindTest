import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	message: undefined,
	error: {
		getQuestions: undefined,
	},
	loading: {
		getQuestions: undefined,
	},
	successes: {
		getQuestions: undefined,
	},
	questions:[]
}

const reducer = handleActions(
	{
		QUESTION: {
			GET_ALL: (state) => ({
				...state,
				loading: { ...state.loading, getQuestions: true },
				error: { ...state.error, getQuestions: false },
				successes: { ...state.successes, getQuestions: false },
			}),
			GET_ALL_RESPONSE: {
				next(state, { payload: { questions } }) {
					return {
						...state,
						questions,
						loading: { ...state.loading, getQuestions: false },
						error: { ...state.error, setLogin: false },
						successes: { ...state.successes, setLogin: true },
					}
				},
				throw(state, { error, payload: { message } }) {
					return {
						...state,
						loading: { ...state.loading, getQuestions: false },
						message,
						error: { ...state.error, setLogin: true },
						successes: { ...state.successes, setLogin: false },
					}
				},
			},
		},
	},
	INITIAL_STATE
)

export default reducer
