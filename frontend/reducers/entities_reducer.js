import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';
import episodesReducer from './episodes_reducer';
import playlistsReducer from './playlists_reducer';

export default combineReducers({ users: usersReducer, remotePodcasts: searchReducer, localPodcasts: episodesReducer, playlists: playlistsReducer });
