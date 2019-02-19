import authReducer from './authReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const initialState = {
    drawerOpen: false
}

// const rootReducer = (state = initialState, action) => {
//     console.log(action)
//     if (action.type === 'TOGGLE_DRAWER') {
//         return {
//             ...state,
//             drawerOpen: !state.drawerOpen
//         }
//     }
//     return state;
// }

const rootReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;