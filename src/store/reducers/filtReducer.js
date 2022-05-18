const defaultState = {
  query: '',
  sort: '',
  category: ''
}

export const filtReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'SORTED_BOOKS':
      return { ...state, sort: actions.payload }

    case 'CATEGOTY_BOOKS':
      return { ...state, category: actions.payload }

    case 'SEARCH_BOOKS':
      return { ...state, query: actions.payload }

    default:
      return state
  }
}