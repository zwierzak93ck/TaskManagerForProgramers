const initialState = {
    
    authError: null,
    redirect: false
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'SIGN_UP_SUCCESS': 
        return {
            ...state,
            authError: null,
            redirect: false
        }
        case 'SIGN_UP_ERROR':
        return {
            ...state,
            authError: action.error.message,
            redirect: false
        }
        case 'SIGN_IN_SUCCESS':
        return {
            ...state,
            authError: null,
            redirect: true
        }
        case 'SIGN_IN_ERROR':
        return {
            ...state,
            authError: action.error.message,
            redirect: false
        }
        case 'SIGN_OUT_SUCCESS':
        return {
            ...state,
            authError: null
        }
        case 'SIGN_OUT_ERROR':
        return {
            ...state,
            authError: action.error.message
        }
        // case 'VERIFY_EMAIL_SUCCESS':
        // return {
        //     ...state,
        //     authError: null
        // }
        // case 'VERIFY_EMAIL_ERROR':
        // return {
        //     ...state,
        //     authError: action.error.message
        // }
        default:
        return state
    }
}

export default authReducer;