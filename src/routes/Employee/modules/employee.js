//action types

//action creators

//action handlers
const ACTION_HANDLERS = {

}


const initialState = {}
export default function employeeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler : state

}