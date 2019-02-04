import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import AuthReducer from './auth'
import SearchReducer from './search'
import ArtistReducer from './artist'

const appReducer = combineReducers({
  routing : routerReducer,
  AuthReducer,
  SearchReducer,
  ArtistReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
