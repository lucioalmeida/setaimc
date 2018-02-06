import { browserHistory } from 'react-router';
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, GET_SESSION_FAIL, GET_SESSION_SUCCESS, GET_SESSION, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL } from './authentication.types';

export function displayAuthError(message) {
  return { type: ERROR_MESSAGE, message };
}

export function login(username, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', { username, password }),
    afterSuccess: (dispatch, getState, response) => {
      localStorage.setItem('auth-token', response.data.access_token);
      const routingState = getState().routing.locationBeforeTransitions.state || {};
      browserHistory.push(routingState.nextPathname ||  '');
    }
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.delete('/logout'),
    afterSuccess: () => {
      browserHistory.push('');
    }
  };
}

export function getSession() {
  return {
    types: [GET_SESSION, GET_SESSION_SUCCESS, GET_SESSION_FAIL],
    promise: (client) => client.get('/api/profile')
  };
}

export function redirectToLoginWithMessage(message) {
  return (dispatch, getState) => {
    const currentPath = getState().routing.locationBeforeTransitions.pathname;
    dispatch(displayAuthError(message));
    browserHistory.replace({ pathname: '/login', state: { nextPathname: currentPath } });
  }
}
