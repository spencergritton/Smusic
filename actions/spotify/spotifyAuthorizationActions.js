
import * as types from '../actionTypes'

export const addAuthorization = authorizationObject => (
  {
    type: types.ADD_AUTHORIZATION,
    payload: authorizationObject,
  }
);