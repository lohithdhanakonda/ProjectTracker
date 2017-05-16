import ProjectsData from '../../../api/ProjectsData.json'
import ProjectsDetails from '../../../api/ProjectDetails.json'
import RESOURCES from '../../../api/EmployeeDetails.json'
import _ from 'lodash'
import moment from 'moment'

export const LOAD_PROJECT = 'LOAD_PROJECT'
export const HANDLE_MULTI_SELECT = 'HANDLE_MULTI_SELECT'
export const HANDLE_CHANGE_EVENT = 'HANDLE_CHANGE_EVENT'
export const HANDLE_STARTDATE_CHANGE = 'HANDLE_STARTDATE_CHANGE'
export const HANDLE_ENDDATE_CHANGE = 'HANDLE_ENDDATE_CHANGE'
export const HANDLE_SAVE = 'HANDLE_SAVE'
export const HANDLE_EDIT = 'HANDLE_EDIT'

const project = {
    name: '',
    clientname:'',
    resources: [],
    startDate: moment(),
    endDate: moment(),
    description: '',
    status:0
}

const initialState = {
    project: project,
    canEdit: false,
    resources: []
}

export function loadProjectDetails(id) {
    debugger;
    let projectData = ProjectsData.filter(project => {
        if (project.id == id)
            return project;
    });
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: LOAD_PROJECT,
                payload: projectData[0],
                resourcedata: RESOURCES
            })
        })
    }
}
export function handleMultiSelectChange(objs) {

    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: HANDLE_MULTI_SELECT,
                payload:{
                    key:'resources',
                    value: objs
                }
            })
        })
    }
}
export function handleChange(e) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: HANDLE_CHANGE_EVENT,
                payload: {
                    key: e.target.name,
                    value: e.target.value
                }
            })
        })
    }
}
export function handleStartDateChange(startDate) {
    let value = startDate;
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: HANDLE_STARTDATE_CHANGE,
                payload: {
                    key: 'startDate',
                    value: startDate
                }
            })
        })
    }

}
export function handleEndDateChange(endDate) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: HANDLE_ENDDATE_CHANGE,
                payload: {
                    key: 'endDate',
                    value: endDate
                }
            })
        })
    }

}
export function handleSave(e) {
    return {
        type: HANDLE_SAVE
    }
}
export function handleEdit() {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: HANDLE_EDIT

            })
        })
    }
}

const ACTION_HANDLERS = {

    [LOAD_PROJECT]: (state, action) => {
        return Object.assign({}, state, { project: action.payload, resources: action.resourcedata, canEdit: false })
    },
    HANDLE_MULTI_SELECT: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    HANDLE_CHANGE_EVENT: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    HANDLE_STARTDATE_CHANGE: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    HANDLE_ENDDATE_CHANGE: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    HANDLE_SAVE: (state, action) => {
        console.log(state.project);
        return Object.assign({}, state, { project: project, canEdit: false });
    },
    HANDLE_EDIT: (state, action) => {
        console.log(state.project);
        return Object.assign({}, state, { canEdit: true });
    }

}


export default function projectReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
