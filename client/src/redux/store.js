import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import basketReducer from "./basketReducer";
import deviceReducer from "./deviceReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
  devices: deviceReducer,
  user: userReducer,
  basket: basketReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;