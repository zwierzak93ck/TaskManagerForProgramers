const initialState = {
    title: '',
    description: '',
    date: ''
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            return {
                ...state,
                title: action.title,
                description: action.description,
                date: action.date
            }

        case 'CREATE_PROJECT_ERROR':
            return state;
            
        default:
            return state;
    }
}

export default projectReducer;