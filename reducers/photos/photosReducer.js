import * as types from '../../actions/actionTypes'

const INITIAL_STATE = {
    photosList: [],
  };
  
const photoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_PHOTO:
        // Adds new photo object to list of photos
        const { photosList } = state;
        if (photosList.filter(e => e.uri === action.payload.uri).length === 0) {
          photosList.push(action.payload);
          const newState = { photosList };
          return newState;
        }
        return state;
      default:
        return state
    }
};

export default photoReducer;