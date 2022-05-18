const defaultState = {
  isLoading: false
}

export const loadReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }

    case 'END_LOADING':
      return { ...state, isLoading: false }

    default:
      return state
  }
}