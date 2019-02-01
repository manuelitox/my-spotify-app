import * as constants from 'constants/auth'

const initialState = {
  token: ''
}

const AuthReducer = ( 
  state = initialState, 
  action 
) => {
  let token
  switch ( action.type ) {
    case constants.AUTH_UPDATE:
      token = action.token      
      return { 
        ...state,
        token
      }
    default:
      return state
  }
}

export default AuthReducer