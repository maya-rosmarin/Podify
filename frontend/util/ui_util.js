export const setCurrentEpisode = (episode) => {
  return $.ajax({
    method: 'POST',
    url: 'api/current_episode',
    data: { episode }
  })
}
