import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookReducer } from './reducers/booksReducer'
import { checkReducer } from './reducers/checkReducer'
import { filtReducer } from './reducers/filtReducer'
import { commentsReducer } from './reducers/commentsReducers'
import { basketReducer } from './reducers/basketReducer'

const rootReducer = combineReducers({
  bookR:bookReducer,
  checkR:checkReducer,
  filtR:filtReducer,
  commR:commentsReducer,
  baskR:basketReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))