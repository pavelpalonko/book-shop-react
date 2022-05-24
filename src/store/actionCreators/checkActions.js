export const startLoading = (payload) => ({type:'START_LOADING', payload})
export const endLoading = (payload) => ({type:'END_LOADING', payload})

export const showModal = (payload) => ({ type: 'SHOW_MODAL', payload })
export const hideModal = (payload) => ({ type: 'HIDE_MODAL', payload })