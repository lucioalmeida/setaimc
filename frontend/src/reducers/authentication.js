import jwt_decode from 'jwt-decode';
import { GET_SESSION_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, GET_SESSION_FAIL, ERROR_MESSAGE, LOGIN_FAIL, GET_SESSION }  from '../actions/authentication.types';

const initialState = {
    isAuthenticated: false,
    username: null,
    errorMessage: null,
    loading: true
  };
  
  // Reducer
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        const token = jwt_decode(action.result.data.access_token);
        return {
          ...state,
          isAuthenticated: true,
          username: token.user_name,
          errorMessage: null
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          username: null,
          errorMessage: action.error.response.data.error_description
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          username: null
        };
      case GET_SESSION:
        return {
          ...state,
          loading: true
        };
        case GET_SESSION_SUCCESS:
        return {
          ...state,
          isAuthenticated: action.result.data.authenticated || false,
          username: action.result.data.principal.username,
          errorMessage: null,
          loading: false
        };
      case GET_SESSION_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          username: null,
          debugError: action.error,
          loading: false
        };
      case ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: action.message
        };
      default:
        return state;
    }
  }