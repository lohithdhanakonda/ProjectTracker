import ProjectDetails from '../../../api/ProjectDetails.json'
import { browserHistory } from 'react-router';
export const LOAD_PROJECTS = 'LOAD_PROJECTS'
export const ARCHIVE_PROJECT = 'ARCHIVE_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'
export const PROJECT_DETAILS = 'PROJECT_DETAILS'

export function LoadProjects(){
    return{
        type:LOAD_PROJECTS,
        payload:ProjectDetails
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

function ArchiveProject(action)
{
     console.log("Project ID", action.payload);
}
 function AddProject(action)
 {
      console.log("Add Project Clicked");
 }

function ProjectDetail(action)  
{    
    console.log("Project ID",action.payload);
    browserHistory.push(`/project/${action.payload}`);
}

const ACTION_HANDLERS = {

    ARCHIVE_PROJECT:(state, action) => {
        ArchiveProject(action);
        return Object.assign({}, state)
    },

    ADD_PROJECT:(state, action) => {   
        AddProject(action);
        return Object.assign({}, state)
    },
    PROJECT_DETAILS:(state, action) => {
        ProjectDetail(action);
        return Object.assign({}, state)
    },
    LOAD_PROJECTS:(state,action)=>{
        return Object.assign({},state,{projects:action.payload})
    }
}

const initialState = {
    projects:[]
}

export default function homeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}