export const fetchAllUserPlaylists = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
    data: { userId }
  })
}

export const createNewPlaylist = (playlistTitle) => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: { playlist: { title: playlistTitle } }
  })
}

export const fetchPlaylist = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists/${playlistId}`
  })
}

export const deletePlaylist = (playlistId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`
  })
}

export const addEpisodeToPlaylist = (episodeId, playlistId) => {
  return $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/add_episode`,
    data: { episodeId }
  })
}

export const fetchAllPlaylistEpisodes = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlist_episodes/${playlistId}`
  })
}
