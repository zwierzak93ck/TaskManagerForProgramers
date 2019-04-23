const initialState = {
    message: null,
    variant: null,
    open: false
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_NOTIFICATION':
        return {
            ...state,
            message: action.message,
            variant: action.variant,
            open: action.open
        }

        case 'CLOSE_NOTIFICATION':
        return {
            ...state,
            message: null,
            variant: null,
            open: false
        }
        default:
        return state;
    }
}

export default notificationReducer;