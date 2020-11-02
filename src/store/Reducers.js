import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerQuestion from "../services/Question/Reducer";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    question: reducerQuestion,
  });

const rootReducer = (history) => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
