const LOGIN_USER = 'LOGIN_USER'
const SET_IS_AUTH = 'SET_IS_AUTH'

let initialState = {
  isAuth: false,
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH :
      return {
        ...state,
        isAuth: action.payload
      };
    case LOGIN_USER :
      return {
        ...state,
        user: action.payload
      };
    default: return state
  }  
}

export const setIsAuth = (payload) => ({ type: SET_IS_AUTH, payload })
export const loginUser = (payload) => ({ type: LOGIN_USER, payload })

export default userReducer