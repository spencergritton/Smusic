import * as types from '../../actions/actionTypes'

const INITIAL_STATE = {
    authorizationToken: null,
    expirationDate: null
  };
  
const spotifyAuthorizationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_AUTHORIZATION:
        // Adds new auth token and date
        try {
            return {
                authorizationToken: action.payload['access_token'],
                expirationDate: new Date(+new Date() + (action.payload['expires_in']*1000))
            };
        } catch {
            return state;
        }
      default:
        return state;
    }
};

export default spotifyAuthorizationReducer;