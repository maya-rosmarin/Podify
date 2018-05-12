export const saveSinglePodcastEpisode = (episode) => {
  return $.ajax({
    method: 'POST',
    url: 'api/podcasts',
    data: episode
  });
};
