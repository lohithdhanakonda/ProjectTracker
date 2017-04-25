//action types
import ProjectsData from '../../../api/ProjectsData.json'
export const LOAD_TASK_DETAILS = 'LOAD_TASK_DETAILS'

//action creators
export function LoadTaskDetails(projectid, taskid) {
    
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: LOAD_TASK_DETAILS,
                payload: _.filter(
                    (_.filter(ProjectsData, { id: parseInt(projectid) }))[0].maintasks,
                    { id: parseInt(taskid) }
                )[0]
            })
        })
    }
}
//action handlers
const ACTION_HANDLERS = {
    [LOAD_TASK_DETAILS]: (state, action) => {
        return Object.assign({}, state, { taskdata: action.payload })
    }
}


const initialState = {
    taskdata: {}
}
export default function taskReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state

}