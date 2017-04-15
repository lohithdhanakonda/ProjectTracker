import ProjectsData from '../../../api/ProjectsData.json'
import _ from  'lodash'
export const LOAD_PROJECT = 'LOAD_PROJECT'

export function LoadProjectDetails(id) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: LOAD_PROJECT,
                payload:  _.filter(ProjectsData, { id: parseInt(id) })
            })
        })
    }
}
const ACTION_HANDLERS = {
    [LOAD_PROJECT]: (state, action) => {
        return Object.assign({}, state, { project: action.payload })
    }
}
const initialState = {
    project: {}
}

export default function projectReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}