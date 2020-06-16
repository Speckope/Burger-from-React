import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

// test reducer for returning initial state when receiving empty object

describe('auth reducer', () => {
  it('should return initial state ', () => {
    expect(reducer(undefined, {})).toEqual({
      error: null,
      userId: null,
      token: null,
      loading: false,
      authRedirectPath: '/',
    });
  });

  it('should store token upon login', () => {
    expect(
      reducer(
        {
          error: null,
          userId: null,
          token: null,
          loading: false,
          authRedirectPath: '/',
        },
        { type: actionTypes.AUTH_SUCCESS, idToken: 'token', userId: 'userId' }
      )
    ).toEqual({
      error: null,
      userId: 'userId',
      token: 'token',
      loading: false,
      authRedirectPath: '/',
    });
  });
});

//test login storing
