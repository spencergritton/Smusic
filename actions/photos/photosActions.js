
import * as types from '../actionTypes'

export const addPhoto = photo => (
  {
    type: types.ADD_PHOTO,
    payload: photo,
  }
);