const defaultState = {
  isModal: false
}

export const modalReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'SHOW_MODAL':
      return { ...state, isModal: true }

    case 'HIDE_MODAL':
      return { ...state, isModal: false }

    default:
      return state
  }
}