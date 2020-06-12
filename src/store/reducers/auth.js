import * as actions from './../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  error: null,
  userId: null,
  token: null,
  loading: false,
};

const authStart = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    userId: action.userId,
    token: action.idToken,
    error: null,
  });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return authStart(state, action);
    case actions.AUTH_FAIL:
      return authFail(state, action);
    case actions.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actions.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
