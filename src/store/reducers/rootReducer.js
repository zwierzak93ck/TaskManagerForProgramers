import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import projectReducer from './projectReducer';
import accountReducer from './accountReducer';
import notificationReducer from './notificationReducer';

// const initialState = {
//     drawerOpen: false
// }

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
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    account: accountReducer,
    project: projectReducer,
    notification: notificationReducer
});

export default rootReducer;