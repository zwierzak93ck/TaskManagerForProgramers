const initialState = {
    drawerOpen: false,
    test: 'test'
}

const rootReducer = (state = initialState, action) => {
    console.log(action)
    if (action.type === 'TOGGLE_DRAWER') {
        return {
            ...state,
            drawerOpen: !state.drawerOpen
        }
    }
    return state;
}

export default rootReducer;