import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_USER_PLAYLISTS = 'RECEIVE_ALL_USER_PLAYLISTS';
export const RECEIVE_SINGLE_PLAYLIST = 'RECEIVE_SINGLE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';

export const fetchAllUserPlaylists = (userId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchAllUserPlaylists(userId).then((playlists) => dispatch(receiveAllUserPlaylists(playlists)))
  }
}

export const createNewPlaylist = (playlistTitle) => {
  return (dispatch) => {
    return PlaylistApiUtil.createNewPlaylist(playlistTitle).then(playlist => dispatch(receiveSinglePlaylist(playlist)))
  }
}

export const addEpisodeToPlaylist = (episode, playlist) => {
  return (dispatch) => {
    return PlaylistApiUtil.addEpisodeToPlaylist(episode, playlist).then(playlist => dispatch(receiveSinglePlaylist(playlist)))
  }
}

export const deletePlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.deletePlaylist(playlistId).then(() => dispatch(deletePlaylistById(playlistId)))
  }
}

export const receiveAllUserPlaylists = playlists => {
  return {
    type: RECEIVE_ALL_USER_PLAYLISTS,
    playlists
  }
}

export const receiveSinglePlaylist = playlist => {
  return {
    type: RECEIVE_SINGLE_PLAYLIST,
    playlist
  }
}

export const deletePlaylistById = playlistId => {
  return {
    type: DELETE_PLAYLIST,
    playlistId
  }
}
