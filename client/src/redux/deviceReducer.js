import { deviceAPI } from './../api/api';

const GET_TYPES = 'GET_TYPES'
const GET_BRANDS = 'GET_BRANDS'
const GET_DEVICES = 'GET_DEVICES'
const SET_SELECTED_TYPE = 'SET_SELECTED_TYPE'
const SET_SELECTED_BRAND = 'SET_SELECTED_BRAND'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_LIMIT = 'SET_LIMIT'

let initialState = {
  types: [],
  brands: [],
  devices: [],
  selectedType: {},
  selectedBrand: {},
  page: 1,
  totalCount: 0,
  limit: 5
}

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES :
      return {
        ...state,
        types: action.types
      };
    case GET_BRANDS :
      return {
        ...state,
        brands: action.brands
      }; 
    case GET_DEVICES :
    return {
      ...state,
      devices: action.devices
    };  
    case SET_SELECTED_TYPE :
      return {
        ...state,
        selectedType: action.selectedType
      }; 
    case SET_SELECTED_BRAND :
      return {
        ...state,
        selectedBrand: action.selectedBrand
      }; 
    case SET_PAGE :
      return {
        ...state,
        page: action.page
      }; 
    case SET_TOTAL_COUNT :
      return {
        ...state,
        totalCount: action.count
    };  
    case SET_LIMIT :
      return {
        ...state,
        limit: action.limit
    };   

    default: return state
  }  
}

export const getTypes = (types) => ({ type: GET_TYPES, types })
export const getBrands = (brands) => ({ type: GET_BRANDS, brands })
export const getDevices = (devices) => ({ type: GET_DEVICES, devices })
export const setSelectedType = (selectedType) => ({ type: SET_SELECTED_TYPE, selectedType })
export const setSelectedBrand = (selectedBrand) => ({ type: SET_SELECTED_BRAND, selectedBrand })
export const setPage = (page) => ({ type: SET_PAGE, page })
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count })
export const setLimit = (limit) => ({ type: SET_LIMIT, limit })

export const fetchTypes = () => {
  return (dispatch) => {
    deviceAPI.fetchTypes().then((data) => {
      dispatch(getTypes(data.data))
    })
  }
}

export const fetchBrands = () => {
  return (dispatch) => {
    deviceAPI.fetchBrands().then((data) => {
      dispatch(getBrands(data.data))
    })
  }
}

export const fetchDevices = (typeId, brandId, page, limit) => {
  return (dispatch) => {
    deviceAPI.fetchDevices(typeId, brandId, page, limit).then((data) => {
      dispatch(getDevices(data.data.rows))
      dispatch(setTotalCount(data.data.count))
      /* dispatch(setLimit(limit)) */
    })
  }
}


export default deviceReducer