import { combineReducers } from "redux";
import errorResponseReducer from "./errorResponseReducer";
import userReducer from "./userReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  user: userReducer,
  errorResponse: errorResponseReducer,
  item: itemReducer
});
