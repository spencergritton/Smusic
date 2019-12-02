import { combineReducers } from 'redux';
import photoReducer from './photos/photosReducer';
import spotifyAuthorizationReducer from './spotify/spotifyAuthorizationReducer';

export default rootReducer = combineReducers({
    photos: photoReducer,
    spotifyAuth: spotifyAuthorizationReducer
});