import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers/index'

const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
const store = applyMiddleware(thunk)(createStore)(rootReducer, enhancers)

export default store