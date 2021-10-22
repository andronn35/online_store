import { basketAPI } from "../api/api";

const SET_BASKET_DEVICE_LIST = 'SET_BASKET_DEVICE_LIST'
const ADD_DEVISE_TO_BASKET = 'ADD_DEVISE_TO_BASKET'

let initialState = {
  basketDevicesList: []
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET_DEVICE_LIST :
      return {
        ...state,
        basketDevicesList: action.basketDevicesList
      };
    case ADD_DEVISE_TO_BASKET :
      return {
        ...state,
        basketDevicesList: [...state.basketDevicesList, action.device]
      };

    default: return state
  }  
}

export const setBasketDeviceList = (basketDevicesList) => ({ type: SET_BASKET_DEVICE_LIST, basketDevicesList })
export const addDeviceToBasket = (device) => ({ type: ADD_DEVISE_TO_BASKET, device })

export const fetchBasketDevices = (id) => {
  return (dispatch) => {
    basketAPI.getBasket(id).then((data) => {
      dispatch(setBasketDeviceList(data.data.basketDevicesList))
    })
  }
}

export const newBasketDevice = (id, deviceId) => {
  return (dispatch) => {
    basketAPI.addNewDevice(id, deviceId).then((data) => { 
      dispatch(addDeviceToBasket(data.data))
    })
  }
}

export default basketReducer