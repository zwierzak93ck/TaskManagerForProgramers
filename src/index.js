import React from 'react';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './store/reducers/rootReducer'
import firebase from './config/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase, { useFirestoreForProfile: true, attachAuthIsReady: true }),
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

