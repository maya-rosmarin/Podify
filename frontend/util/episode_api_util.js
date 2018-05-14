export const saveSinglePodcastEpisode = (episode) => {
  return $.ajax({
    method: 'POST',
    url: 'api/episodes',
    data: { episode }
  });
};

export const fetchAllUserEpisodes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/episodes'
  })
}

export const deleteUserEpisode = (episodeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/episodes/${episodeId}`
  })
}
