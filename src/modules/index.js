import Immutable from 'immutable';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { addNotification as notify } from 'reapop';
import { push } from 'react-router-redux';

/* eslint quote-props:0 */

/*
 *  Constants
 */
export const AUTH_TOKEN = 'AUTH_TOKEN';
export const UNAUTH_TOKEN = 'UNAUTH_TOKEN';
export const DECODE_TOKEN = 'DECODE_TOKEN';

const defaultState = Immutable.fromJS({
  authenticated: false,
  user: null
});

/*
 *  Actions
 */
export function decodeToken(token = '') {
  const { sub } = jwtDecode(token);
  const request = axios.get(`/users/${sub}`);

  return {
    type: DECODE_TOKEN,
    payload: request
  };
}

export function authToken(accessToken = '', idToken = '') {
  return dispatch => {
    if (!accessToken || !idToken) {
      return dispatch({
        type: AUTH_TOKEN,
        payload: false
      });
    }

    // access_token: token we use for every HTTP request to our API
    localStorage.setItem('access_token', accessToken);

    // id_token: token we need to decrypt to get user info
    localStorage.setItem('id_token', idToken);
    dispatch(decodeToken(idToken));

    return dispatch({
      type: AUTH_TOKEN,
      payload: true
    });
  };
}

export function unauthToken() {
  return dispatch => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');

    dispatch(push('/login'));

    return dispatch({
      type: UNAUTH_TOKEN,
      payload: false
    });
  };
}

export const actions = {
  authToken,
  unauthToken,
  decodeToken
};

/*
 *  Action Handlers
 */
const ACTION_HANDLERS = {
  [AUTH_TOKEN]: (state, action) => state.set('authenticated', action.payload),
  [UNAUTH_TOKEN]: (state, action) => state.set('authenticated', action.payload),
  [DECODE_TOKEN]: (state, action) => state.set('user', action.payload)
};

/*
 *  Reducer
 */
export default function globalReducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
