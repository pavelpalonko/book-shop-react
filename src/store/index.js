import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookReducer } from './reducers/booksReducer'
import { loadReducer } from './reducers/loadReducer'
import { filtReducer } from './reducers/filtReducer'

const rootReducer = combineReducers({
  bookR:bookReducer,
  loadR:loadReducer,
  filtR:filtReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))