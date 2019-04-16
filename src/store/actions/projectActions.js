export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            userId: userId
        })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT_SUCCESS' })
            })
            .catch(() => {
                dispatch({ type: 'CREATE_PROJECT_ERROR' })
            })
    }
}