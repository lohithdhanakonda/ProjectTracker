import ProjectDetails from '../../../api/ProjectDetails.json'
import ProjectsData from '../../../api/ProjectsData.json'
import RESOURCES from '../../../api/EmployeeDetails.json';
import {browserHistory} from 'react-router';
import _ from 'lodash';
import React from 'react';

export const LOAD_PROJECTS = 'LOAD_PROJECTS'
export const ARCHIVE_PROJECT = 'ARCHIVE_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'
export const PROJECT_DETAILS = 'PROJECT_DETAILS'
export const HANDLE_MULTI_SELECT = 'HANDLE_MULTI_SELECT'
export const HANDLE_CHANGE_EVENT = 'HANDLE_CHANGE_EVENT'
export const HANDLE_STARTDATE_CHANGE = 'HANDLE_STARTDATE_CHANGE'
export const HANDLE_ENDDATE_CHANGE = 'HANDLE_ENDDATE_CHANGE'
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const ARCHIVE_CONFIRMATION = 'ARCHIVE_CONFIRMATION'
export const SHOW_ARCHIEVE = 'SHOW_ARCHIEVE'


export function LoadProjects() {
    return {
        type: LOAD_PROJECTS,
        payload: ProjectsData
    }
}

export function ArchiveProjectConfirmed() {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: ARCHIVE_PROJECT
            })
        })
    }
}
export function Archieve_Project(event) {
        return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: ARCHIVE_CONFIRMATION,
                payload: event && event.project ? event.project : null
            })
        })
    }
}
export function ShowArchieveProjects() {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: SHOW_ARCHIEVE
            })
        })
    }
}
export function filterProjects(value) {
    let projects = [];
    ProjectsData.forEach(function (element) {
        if (value > 1 && element.name[0].toLowerCase() == String.fromCharCode(value)) {
            projects.push(element);
        }
        if (value == 1) {
            if (parseInt(element.name[0].toLowerCase()) == element.name[0].toLowerCase()) {
                projects.push(element);
            }
        }
    })

    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: LOAD_PROJECTS,
                payload: value == 0 ? ProjectsData : projects
            })
        })
    }
}
export function Add_Project() {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: ADD_PROJECT
            })
        })
    }
}
export function Project_Details(id) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: PROJECT_DETAILS,
                payload: id
            })
        })
    }
}

//ADD & EDIT POPUP  RELATED FUNCTION
export function handleMultiSelectChange(e) {
    var options = e.target.options;
    var selectedvalues = [];
    for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
            selectedvalues.push(options[i].id);
        }
    }
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: HANDLE_MULTI_SELECT,
                payload: {
                    key: 'resources',
                    value: selectedvalues
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

function ProjectDetail(action) {
    console.log("Project ID", action.payload);
    return (dispatch, getState) => {
        console.log(dispatch)
        console.log(getState)
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
export function handleSubmit(e) {
    return {
        type: HANDLE_SUBMIT
    }
}

const ACTION_HANDLERS = {
    [SHOW_ARCHIEVE]: (state, action) => {
        return Object.assign({}, state, { showArchieve: !state.showArchieve });
    },
    [ARCHIVE_CONFIRMATION]: (state, action) => {
        const projectId = action.payload ? action.payload : null;
        return Object.assign({}, state, { archieveProjectId: projectId, deleteModal: !state.deleteModal });
    },
    [ARCHIVE_PROJECT]: (state, action) => {
       let newState = Object.assign({}, state);
        let updatedProjs = []
        let archievProjects = []
        newState.archievedProjects.map((proj) => {
            archievProjects.push(proj)
        })
        newState.projects.map((proj) => {
             if (proj.id == state.archieveProjectId) {
                proj.status=1
                archievProjects.push(proj)
            } else{
                updatedProjs.push(proj)
            }
        })
        return Object.assign({}, newState, { projects: updatedProjs, archievedProjects: archievProjects, deleteModal: !state.deleteModal })
    },
    [ADD_PROJECT]: (state, action) => {
        return Object.assign({}, state, { showModal: !state.showModal })

    },
    [PROJECT_DETAILS]: (state, action) => {
        return browserHistory.push(`/project/${action.payload}`);
        // return Object.assign({}, state)
    },
    [LOAD_PROJECTS]: (state, action) => {
        let updatedProjs = []
        let archievProjects = []
        let projects =action.payload
        projects.map((proj) => {
             if (proj.status==1) {
                archievProjects.push(proj)
            } else{
                updatedProjs.push(proj)
            }
        })
        return Object.assign({}, state, { projects: updatedProjs, archievedProjects: archievProjects, filteredProjects: updatedProjs})
    },
    [HANDLE_MULTI_SELECT]: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    [HANDLE_CHANGE_EVENT]: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    [HANDLE_STARTDATE_CHANGE]: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    [HANDLE_ENDDATE_CHANGE]: (state, action) => {
        let newSelected = _.extend({}, state.project);
        newSelected[action.payload.key] = action.payload.value;
        return Object.assign({}, state, { project: newSelected });
    },
    [HANDLE_SUBMIT]: (state, action) => {
        debugger;
        console.log(state.project);
        return Object.assign({}, state, { project: project });
    }

}
const project = {
    name: '',
    clientname: '',
    resources: [],
    startDate: null,
    endDate: null,
    description: '',
}


const initialState = {
    projects: [],
    resources: RESOURCES,
    filteredProjects: [],
    project: project,
    showModal: false,
    deleteModal: false,
    archieveProjectId: 0,
    archievedProjects: [],
    showArchieve: false
}

export default function homeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

