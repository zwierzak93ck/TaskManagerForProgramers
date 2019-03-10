const initialState = {
    
    accountError: null
}

const accountReducer = (state= initialState, action) => {
    switch(action.type) {
        case 'FORGOT_PASSWORD_SUCCESS':
        return {
            ...state,
            accountError: null
        }
        case 'FORGOT_PASSWORD_ERROR':
        return {
            ...state,
            accountError: action.error.message
        }
        case 'SEND_VERIFICATION_EMAIL_SUCCESS':
        return {
            ...state,
            accountError: null
        }
        case 'SEND_VERIFICATION_EMAIL_ERROR':
        return {
            ...state,
            accountError: action.error.message
        }
        case 'SEND_PASSWORD_RESET_EMAIL_SUCCESS':
        return {
            ...state,
            accountError: null
        }
        case 'SEND_PASSWORD_RESET_EMAIL_ERROR': 
        return {
            ...state,
            accountError: action.error.message
        }
        default: 
        return state;
    }
}

export default accountReducer;