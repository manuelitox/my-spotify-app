import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import AuthReducer from './auth'
import SearchReducer from './search'

const appReducer = combineReducers({
  routing : routerReducer,
  AuthReducer,
  SearchReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
