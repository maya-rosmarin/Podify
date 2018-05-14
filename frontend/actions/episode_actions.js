import * as EpisodeApiUtil from '../util/episode_api_util';

export const SAVE_PODCAST_EPISODE = 'SAVE_PODCAST_EPISODE';
export const RECEIVE_ALL_USER_EPISODES = 'RECEIVE_ALL_USER_EPISODES';

export const saveSinglePodcastEpisode = (episode) => {
  debugger
  return (dispatch) => {
    return EpisodeApiUtil.saveSinglePodcastEpisode(episode).then(episode => dispatch(receiveSinglePodcastEpisode(episode)))
  }
}

export const fetchAllUserEpisodes = (user_id) => {
  return (dispatch) => {
    return EpisodeApiUtil.fetchAllUserEpisodes(user_id).then(episodes => dispatch(receiveAllUserEpisodes(episodes)))
  }
}

export const receiveSinglePodcastEpisode = episode => {
  debugger
  type: SAVE_PODCAST_EPISODE,
  episode
}

export const receiveAllUserEpisodes = episodes => {
  type: RECEIVE_ALL_USER_EPISODES,
  episodes
}
