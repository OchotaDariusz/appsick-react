const initialState = {
    loginModalShow: false
};

export const setTrue = () => ({
  type: true
})

export const setFalse = () => ({
  type: false
})

export default (state = initialState, action) => {
    return {...state, loginModalShow: (action.type)};
}