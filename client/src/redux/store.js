import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import deviceReducer from "./deviceReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
  devices: deviceReducer,
  user: userReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;