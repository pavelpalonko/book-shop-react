const defaultState = {
  booksBasket: []
}

export const basketReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'ADD_BOOK':
      return { ...state, booksBasket: [...state.booksBasket, actions.payload] }

    case 'DELETE_BOOK':
      return { ...state, booksBasket: [...actions.payload] }

    default:
      return state
  }
}