export const updateDisplayName = (displayName) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const currentUser = firebase.auth().currentUser;
        console.log(currentUser)
        console.log(displayName)
        currentUser.updateProfile({
            displayName
        })
            .then(() => {
                console.log('success name')
                dispatch({ type: 'UPDATE_DISPLAY_NAME_SUCCESS' })
            })
            .catch((error) => {
                dispatch({ type: 'UPDATE_DISPLAY_NAME_ERROR', error })
            });
    }
}

export const sendEmailVerification = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const currentUser = firebase.auth().currentUser;
        var actionCodeSettings = {
            url: 'http://localhost:3000/signIn',
            //url: 'https://task-manager-for-programers.firebaseapp.com/signIn',
            handleCodeInApp: true
        };
        currentUser.sendEmailVerification(actionCodeSettings)
            .then(() => {
                console.log('success email')
                dispatch({ type: 'SEND_VARIFICATION_EMAIL_SUCCESS' })
            })
            .catch((error) => {
                dispatch({ type: 'SEND_VERIFICATION_EMAIL_ERROR', error })
            });
    }
}

export const sendPasswordResetEmail = (email) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const auth = firebase.auth();

        var actionCodeSettings = {
            url: 'http://localhost:3000/signIn',
            //url: 'https://task-manager-for-programers.firebaseapp.com/signIn',
            handleCodeInApp: true
        };
        auth.sendPasswordResetEmail(email.email, actionCodeSettings)
            .then(() => {
                dispatch({ type: 'SEND_PASSWORD_RESET_EMAIL_SUCCESS' })
            })
            .catch((error) => {
                dispatch({ type: 'SEND_PASSWORD_RESET_EMAIL_ERROR', error })
            })
    }
}

export const updatePassword = (userData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const currentUser = firebase.auth().currentUser;

        const credential = firebase.auth.EmailAuthProvider.credential(
            currentUser.email,
            userData.oldPassword
        );

        currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
            .then(() => {
                currentUser.updatePassword(userData.newPassword)
                    .then(() => {
                        dispatch({ type: 'UPDATE_PASSWORD_SUCCESS' })
                    })
                    .catch((error) => {
                        dispatch({ type: 'UPDATE_PASSWORD_ERROR', error })
                    })
            })
            .catch((error) => {
                dispatch({ type: 'REAUTHENTICATE_ERROR', error })
            })
    }
}

export const updateEmail = (userData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const currentUser = firebase.auth().currentUser;

        const credential = firebase.auth.EmailAuthProvider.credential(
            currentUser.email,
            userData.password
        );

        currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
            .then(() => {
                currentUser.updateEmail(userData.newEmail)
                    .then(() => {
                        dispatch({ type: 'UPDATE_EMAIL_SUCCESS' })
                    })
                    .catch((error) => {
                        dispatch({ type: 'UPDATE_EMAIL_ERROR', error })
                    })
            })
            .catch((error) => {
                dispatch({ type: 'REAUTHENTICATE_ERROR', error })
            })
    }
}

