export const updateDisplayName = (displayName) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const currentUser = firebase.auth().currentUser;

        currentUser.updateProfile({
            displayName
        })
        .then(() => {
            dispatch({type: 'UPDATE_DISPLAY_NAME_SUCCESS'})
        })
        .catch((error) => {
            dispatch({type: 'UPDATE_DISPLAY_NAME_ERROR', error})
        });
    }
}

export const sendEmailVerification = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const currentUser = firebase.auth().currentUser;
        console.log(currentUser)
        var actionCodeSettings = {
            //url: 'http://localhost:3000/signIn',
            url: 'https://task-manager-for-programers.firebaseapp.com/signIn',
            handleCodeInApp: true
          };
        currentUser.sendEmailVerification(actionCodeSettings)
        .then(() => {
            dispatch({type: 'SEND_VARIFICATION_EMAIL_SUCCESS'})
        })
        .catch((error) => {
            dispatch({type: 'SEND_VERIFICATION_EMAIL_ERROR', error})
        });
    }
}