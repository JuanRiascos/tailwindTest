import { fork, all } from "redux-saga/effects";

import QuestionSaga from "../services/Question/Saga";

export default function* rootSaga() {
  yield all([
    fork(QuestionSaga),
  ]);
}
