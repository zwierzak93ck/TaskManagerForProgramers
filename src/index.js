import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import  rootReducer  from './store/reducers/rootReducer'
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import  firebase  from './config/firebaseConfig';


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore })),
    reactReduxFirebase(firebase, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
    reduxFirestore(firebase)
));

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root')
    );
})

