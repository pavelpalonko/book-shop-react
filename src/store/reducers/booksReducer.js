const defaultState = {
  books: []
}

export const bookReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'FETCH_BOOKS':
      return { ...state, books: [...actions.payload] }
      
    case 'SORT_BOOKS':
      return { ...state, books: [...actions.payload] }

    default:
      return state
  }
}

