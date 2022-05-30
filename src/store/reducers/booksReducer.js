const defaultState = {
  books: [],
  fetchError: false
}

export const bookReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'FETCH_BOOKS':
      return { ...state, books: [...actions.payload] }

    case 'FETCH_ERR':
      return { ...state, fetchError: actions.payload }

    default:
      return state
  }
}