import { takeLatest, all, put } from 'redux-saga/effects'
import { question } from './Actions'
import {dummy} from '../../../common/utils/Dummy'


function* getAll() {
	try {
			yield put(question.getAllResponse(dummy.questions))

	} catch (error) {
		const err = new TypeError('ERROR_GETQUESTION')
		alert('Ha sucedido un error')
		yield put(question.getAllResponse(err))
	}
}

function* ActionWatcher() {
	yield takeLatest(question.getAll, getAll)
}

export default function* rootSaga() {
	yield all([ActionWatcher()])
}
