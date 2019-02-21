export const signUp = (newUserData) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUserData.email,
            newUserData.password
        )
        .then((response) => {
            console.log(response)
            return firestore.collection('user').doc(response.user.uid).set({
                nickName: newUserData.nickName
            })
        })
        .then(() => {
            dispatch({type: 'SIGN_UP_SUCCESS'});
        })
        .catch((error) => {
            dispatch({type: 'SIGN_UP_ERROR', error})
        })
    }
}

export const signIn = (userData) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().signInWithEmailAndPassword(
            userData.email,
            userData.password
        )
        .then(() => {
            dispatch({type: 'SIGN_IN_SUCCESS'})
        })
        .catch((error) => {
            dispatch({type: 'SIGN_IN_ERROR', error})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(() => {
            dispatch({type: 'SIGN_OUT_SUCCESS'})
        })
        .catch((error) => {
            dispatch({type: 'SIGN_OUT_ERROR', error})
        })
    }
}

export const sendVerificationEmail = (userData) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        console.log(userData)
    }
}
