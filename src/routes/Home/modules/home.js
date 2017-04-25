import ProjectsData from '../../../api/ProjectsData.json'
import { browserHistory } from 'react-router';
import _ from  'lodash'
import { push } from 'react-router-redux';

export const LOAD_PROJECTS = 'LOAD_PROJECTS'
export const ARCHIVE_PROJECT = 'ARCHIVE_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'
export const PROJECT_DETAILS = 'PROJECT_DETAILS'
export const ARCHIVE_CONFIRMATION = 'ARCHIVE_CONFIRMATION'
export const SHOW_ARCHIEVE = 'SHOW_ARCHIEVE'
export function LoadProjects() {
    return {
        type: LOAD_PROJECTS,
        payload: ProjectsData
    }
}

export function ArchiveProjectConfirmed() {
    debugger
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            dispatch({
                type: ARCHIVE_PROJECT
            })
        })
    }
}
export function Archieve_Project(event) {
    debugger
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
    debugger
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

function AddProject(action) {
    console.log("Add Project Clicked");
}

function ProjectDetail(action) {
    console.log("Project ID", action.payload);
    return (dispatch, getState) => {
        console.log(dispatch)
        console.log(getState)
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
            if (proj.id != state.archieveProjectId) {
                updatedProjs.push(proj)
            }
            else {
                archievProjects.push(proj)
            }
        })
        return Object.assign({}, newState, { projects: updatedProjs, archievedProjects: archievProjects, deleteModal: !state.deleteModal })
    },
    [ADD_PROJECT]: (state, action) => {
        AddProject(action);
        return Object.assign({}, state)
    },
    [PROJECT_DETAILS]: (state, action) => {
        ProjectDetail(action);
        return Object.assign({}, state)
    },
    [LOAD_PROJECTS]: (state, action) => {
        return Object.assign({}, state, { projects: action.payload, filteredProjects: action.payload })
    }
}

const initialState = {
    projects: [],
    filteredProjects: [],
    archieveProjectId: 0,
    archievedProjects: [],
    showArchieve: false,
    deleteModal: false
}

export default function homeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
