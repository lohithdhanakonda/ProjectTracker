import ProjectDetails from '../../../api/ProjectDetails.json';
import RESOURCES from '../../../api/EmployeeDetails.json';
import {browserHistory} from 'react-router';
import _ from 'lodash';
import moment from 'moment';
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


export function LoadProjects() {
    return {
        type: LOAD_PROJECTS,
        payload: ProjectDetails
    }
}
export function Drag_Project(event) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: ARCHIVE_PROJECT,
                payload: event.project
            })
        })
    }
}
export function filterProjects(value) {
    let projects = [];
    ProjectDetails.forEach(function (element) {
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
                payload: value == 0 ? ProjectDetails : projects
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
    debugger;
    var options = e.target.options;
    var selectedvalues = [];
    for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
            selectedvalues.push(options[i].value);
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
    debugger;
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
    debugger;
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
export function handleSubmit(e) {
    debugger;
    return {
        type: HANDLE_SUBMIT
    }
}


    // function ArchiveProject(action) {
    //     console.log("Project ID", action.payload);
    // }

    // function ProjectDetail(action) {
    //     console.log("Project ID", action.payload);
    //     browserHistory.push(`/project/${action.payload}`);
    // }

    const ACTION_HANDLERS = {

        ARCHIVE_PROJECT: (state, action) => {
            ArchiveProject(action);
            return Object.assign({}, state)
        },

        ADD_PROJECT: (state, action) => {
            debugger;
            let showmodal = state.showModal
            return Object.assign({}, state, { showModal: !showmodal })
        },
        PROJECT_DETAILS: (state, action) => {
         return browserHistory.push(`/project/${action.payload}`);
           // return Object.assign({}, state)
        },
        LOAD_PROJECTS: (state, action) => {
            return Object.assign({}, state, { projects: action.payload, filteredProjects: action.payload })
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
            debugger;
            let newSelected = _.extend({}, state.project);
            newSelected[action.payload.key] = action.payload.value;
            return Object.assign({}, state, { project: newSelected });
        },
        HANDLE_ENDDATE_CHANGE: (state, action) => {
            debugger;
            let newSelected = _.extend({}, state.project);
            newSelected[action.payload.key] = action.payload.value;
            return Object.assign({}, state, { project: newSelected });
        },
        HANDLE_SUBMIT: (state, action) => {
            debugger;
            console.log(state.project);
            return Object.assign({}, state, { project: project });
        }

    }
    const project = {
    name: '',
    resources: [],
    startDate: moment(),
    endDate: moment(),
    description: '',
}


    const initialState = {
        projects: [],
        resources:RESOURCES,
        filteredProjects: [],
        project: project,
        showModal: false
    }

    export default function homeReducer(state = initialState, action) {
        const handler = ACTION_HANDLERS[action.type];
        return handler ? handler(state, action) : state;
    }

