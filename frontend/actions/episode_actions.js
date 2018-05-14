import * as EpisodeApiUtil from '../util/episode_api_util';

export const SAVE_PODCAST_EPISODE = 'SAVE_PODCAST_EPISODE';
export const RECEIVE_ALL_USER_EPISODES = 'RECEIVE_ALL_USER_EPISODES';
export const DELETE_PODCAST_EPISODE = 'DELETE_PODCAST_EPISODE';

export const saveSinglePodcastEpisode = (episode) => {
  return (dispatch) => {
    return EpisodeApiUtil.saveSinglePodcastEpisode(episode).then(episode => {
      debugger
      dispatch(receiveSinglePodcastEpisode(episode))
    })
  }
}

export const fetchAllUserEpisodes = () => {
  return (dispatch) => {
    return EpisodeApiUtil.fetchAllUserEpisodes().then(episodes => dispatch(receiveAllUserEpisodes(episodes)))
  }
}

export const deleteSinglePodcastEpisode = (episodeId) => {
  return (dispatch) => {
    return EpisodeApiUtil.deleteUserEpisode(episodeId).then(() => dispatch(deletePodcastEpisode(episodeId)))
  }
}

export const receiveSinglePodcastEpisode = episode => {
  return {
    type: SAVE_PODCAST_EPISODE,
    episode
  }
}

export const receiveAllUserEpisodes = episodes => {
  return {
    type: RECEIVE_ALL_USER_EPISODES,
    episodes
  }
}

export const deletePodcastEpisode = episodeId => {
  return {
    type: DELETE_PODCAST_EPISODE,
    episodeId
  }
}
