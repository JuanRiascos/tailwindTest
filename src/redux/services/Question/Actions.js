import { createActions } from 'redux-actions'

export const { question } = createActions({
	QUESTION: {
		GET_ALL: () => ({}),
		GET_ALL_RESPONSE: (questions) => ({ questions }),
	},
})
