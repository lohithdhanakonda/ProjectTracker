//action types

//action creators

//action handlers
const ACTION_HANDLERS = {

}


const initialState = {}
export default function subtaskReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler : state

}