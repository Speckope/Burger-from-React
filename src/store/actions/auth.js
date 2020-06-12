import * as actions from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actions.AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actions.AUTH_SUCCESS,
    idToken,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: actions.AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  return {
    type: actions.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (authTimeout) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, authTimeout * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPCDGzWliAJLMOWMCRgZHFptnnzRSRQYs';
    if (!isSignUp)
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPCDGzWliAJLMOWMCRgZHFptnnzRSRQYs';

    axios
      .post(url, authData)
      .then((res) => {
        console.log(res.data);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
