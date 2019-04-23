export const openNotification = (open, message, variant) => {
    return (dispatch) => {
        dispatch({type: 'OPEN_NOTIFICATION', open, message, variant});
    }
}

export const closeNotification = () => {
    return (dispatch => {
        dispatch({type: 'CLOSE_NOTIFICATION'});
    })
}