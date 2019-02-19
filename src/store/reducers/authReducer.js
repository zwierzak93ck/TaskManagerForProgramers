const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'SIGN_UP_SUCCESS': 
        return {
            ...state,
            authError: null
        }
        case 'SIGN_UP_ERROR':
        return {
            ...state,
            authError: action.error.message
        }
        default:
        return state
    }
}

export default authReducer;