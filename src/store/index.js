import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookReducer } from './reducers/booksReducer'
import { loadReducer } from './reducers/loadReducer'
import { filtReducer } from './reducers/filtReducer'
import { commentsReducer } from './reducers/commentsReducers'
import { modalReducer } from './reducers/modalReducer'

const rootReducer = combineReducers({
  bookR:bookReducer,
  loadR:loadReducer,
  filtR:filtReducer,
  commR:commentsReducer,
  modalR:modalReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))