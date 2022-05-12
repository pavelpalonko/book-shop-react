import { fetchBooks } from "../actionCreators/bookActions"
import { startLoading, endtLoading } from "../actionCreators/loadActions"

export const asyncFetchBookAction = () => {
  return async dispatch => {
    try {
      dispatch(startLoading(true))
      const response = await fetch('https://data-base-for-app.herokuapp.com/books')
      const result = await response.json()
      dispatch(fetchBooks(result))
      dispatch(endtLoading(false))
    } catch (error) {
      console.log(error.message)
    } finally {
      dispatch(endtLoading(false))
    }
  }
}



