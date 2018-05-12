import * as EpisodeApiUtil from '../util/episode_api_util';

export const SAVE_PODCAST_EPISODE = 'SAVE_PODCAST_EPISODE';

export const saveSinglePodcastEpisode = (episode) => {
  debugger
  return (dispatch) => {
    return EpisodeApiUtil.saveSinglePodcastEpisode(episode).then(episode => dispatch(receiveSinglePodcastEpisode(episode)))
  }
}

export const receiveSinglePodcastEpisode = episode => {
  debugger
  type: SAVE_PODCAST_EPISODE,
  episode
}
