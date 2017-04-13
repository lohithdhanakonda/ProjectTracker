export const ACTION_TYPE = 'ACTION_TYPE'

export function ActionCreator() {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: ACTION_TYPE,
                payload: true
            })
        })
    }
}
const ACTION_HANDLERS = {
    [ACTION_TYPE]: (state, action) => {
        return Object.assign({}, state)
    }
}
const initialState = 0

export default function projectReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}