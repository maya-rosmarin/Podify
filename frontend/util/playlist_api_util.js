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
