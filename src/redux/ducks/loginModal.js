const initialState = {
    loginModalShow: false
};

export const showModal = () => ({
  type: true
})

export const hideModal = () => ({
  type: false
})

export default (state = initialState, action) => {
    switch (action.type) {
        case true:
            return {...state, loginModalShow: true};
        case false:
        default:
            return {...state, loginModalShow: false};
    }
}