import {browserHistory} from 'react-router';

const ACTION_HANDLERS = {};

const initialState = {
    projects: [],
    filteredProjects: []
}

export default function loginReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler
        ? handler(state, action)
        : state;
}