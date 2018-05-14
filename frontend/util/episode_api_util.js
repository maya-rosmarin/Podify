export const saveSinglePodcastEpisode = (episode) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/episodes',
    data: { episode }
  });
};

export const fetchAllUserEpisodes = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/episodes',
    data: { user_id }
  })
}

export const deleteUserEpisode = (episode_id) => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/episodes',
    data: { episode_id }
  })
}
