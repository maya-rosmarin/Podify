import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';
import episodesReducer from './episodes_reducer';

export default combineReducers({ users: usersReducer, remotePodcasts: searchReducer, localPodcasts: episodesReducer });
