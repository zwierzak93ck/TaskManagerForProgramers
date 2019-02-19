export const signUp = (newUserData) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUserData.email,
            newUserData.password
        )
        .then((response) => {
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