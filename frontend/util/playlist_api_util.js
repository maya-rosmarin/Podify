export const fetchAllUserPlaylists = (user) => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
    data: { user }
  })
}

export const createNewPlaylist = (playlist) => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: { playlist }
  })
}

export const fetchPlaylist = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists/${playlistId}`
  })
}

export const addEpisodeToPlaylist = (episode, playlist) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/playlists/${playlist.id}`,
    data: { episode }
  })
}

export const deletePlaylist = (playlistId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`
  })
}
