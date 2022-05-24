const defaultState = {
  isLoading: false,
  isModal: false,
}

export const checkReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }

    case 'END_LOADING':
      return { ...state, isLoading: false }

    case 'SHOW_MODAL':
      return { ...state, isModal: true }

    case 'HIDE_MODAL':
      return { ...state, isModal: false }

    default:
      return state
  }
}