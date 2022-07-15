import { combineReducers } from "redux";
import errorResponseReducer from "./errorResponseReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  errorResponse: errorResponseReducer,
});
