import { RECEIVE_ALL_USER_PLAYLISTS, RECEIVE_SINGLE_PLAYLIST, DELETE_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USER_PLAYLISTS:
      return merge({}, state, action.playlists)
    case RECEIVE_SINGLE_PLAYLIST:
      return merge({}, state, {[action.playlist.id]: action.playlist} )
    case DELETE_PLAYLIST:
      const newState = merge({}, state)
      delete newState[action.playlistId]
      return newState;
    default:
      return state;
  }
}
