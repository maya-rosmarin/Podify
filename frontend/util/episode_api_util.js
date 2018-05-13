// save single episode under current user in database
export const saveSinglePodcastEpisode = (episode) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/episodes',
    data: {episode: episode}
  });
};
