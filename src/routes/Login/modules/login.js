export const USERNAME_CHANGED = 'USERNAME_CHANGED'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'

export function userNameChanged(event) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: USERNAME_CHANGED,
                payload: event.target.value
            })
        })
    }
}
export function passwordChanged(event) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: PASSWORD_CHANGED,
                payload: event.target.value
            })
        })
    }
}
const ACTION_HANDLERS = {
    [USERNAME_CHANGED]: (state, action) => {
        return Object.assign({}, state, { username: action.payload });
    },
    [PASSWORD_CHANGED]: (state, action) => {
        return Object.assign({}, state, { password: action.payload });

    }
}
const initialState = {
    username: null,
    password:null
}

export default function loginReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}