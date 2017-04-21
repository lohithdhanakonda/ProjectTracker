import ProjectDetails from '../../../api/ProjectDetails.json'
//action types
export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES'
//action creators
export function LoadEmployeeData(id) {
    let employees = ['emp1', 'emp2']
    //todo
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({type: LOAD_EMPLOYEES, payload: employees})
        })
    }
}
//action handlers
const ACTION_HANDLERS = {
    [LOAD_EMPLOYEES]: (state, action) => {
        return Object.assign({}, state, {employees: action.payload})
    }
}
const initialState = {
    employees: []
}
export default function employeeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler
        ? handler(state, action)
        : state

}