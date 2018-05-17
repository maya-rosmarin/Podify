import * as PlaylistApiUtil from '../util/playlist_api_util';


export const RECEIVE_ALL_USER_PLAYLISTS = 'RECEIVE_ALL_USER_PLAYLISTS';
export const RECEIVE_SINGLE_PLAYLIST = 'RECEIVE_SINGLE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_ALL_PLAYLIST_EPISODES = 'RECEIVE_ALL_PLAYLIST_EPISODES';
export const RECEIVE_PLAYLIST_PAYLOAD = 'RECEIVE_PLAYLIST_PAYLOAD';

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

export const addEpisodeToPlaylist = (episodeId, playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.addEpisodeToPlaylist(episodeId, playlistId).then(playlist => dispatch(receiveSinglePlaylist(playlist)))
  }
}

export const deletePlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.deletePlaylist(playlistId).then(() => dispatch(deletePlaylistById(playlistId)))
  }
}

export const receiveAllPlaylistEpisodes = (playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchAllPlaylistEpisodes(playlistId).then((episodes) => dispatch(receivePlaylistEpisodes(episodes)))
  }
}

export const fetchPlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchPlaylist(playlistId).then(payload => dispatch(receivePlaylist(payload)))
  }
}

export const receivePlaylist = payload => {
  return {
    type: RECEIVE_PLAYLIST_PAYLOAD,
    payload
  }
}

export const receivePlaylistEpisodes = episodes => {
  return {
    type: RECEIVE_ALL_PLAYLIST_EPISODES,
    episodes
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
