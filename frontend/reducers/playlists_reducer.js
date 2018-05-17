import { RECEIVE_ALL_USER_PLAYLISTS, RECEIVE_SINGLE_PLAYLIST, DELETE_PLAYLIST, RECEIVE_ALL_PLAYLIST_EPISODES, RECEIVE_PLAYLIST_PAYLOAD } from '../actions/playlist_actions';
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
    case RECEIVE_PLAYLIST_PAYLOAD:
      let playlist = action.payload.playlist;
      return merge({}, state, { [playlist.id]: playlist })
    default:
      return state;
  }
}
