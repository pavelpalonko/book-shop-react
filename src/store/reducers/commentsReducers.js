const defaultState = {
  comments: []
}

export const commentsReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'ADD_COMMENT':
      return { ...state, comments: [actions.payload, ...state.comments] }

    case 'DELET_COMMENT':
      return { ...state, comments: [...actions.payload] }

    default:
      return state
  }
}