import { fetchBooks } from "../actionCreators/bookActions"
import { startLoading, endLoading } from "../actionCreators/checkActions"

export const asyncFetchBookAction = () => {
  return async dispatch => {
    try {
      dispatch(startLoading(true))
      const response = await fetch('https://data-base-for-app.herokuapp.com/books')
      const result = await response.json()
      dispatch(fetchBooks(result))
      dispatch(endLoading(false))
    } catch (error) {
      console.log(error.message)
    } finally {
      dispatch(endLoading(false))
    }
  }
}