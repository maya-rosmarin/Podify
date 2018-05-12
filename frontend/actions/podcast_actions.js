import * as PodcastApiUtil from '../util/podcast_api_util';

export const SAVE_PODCAST_EPISODE = 'SAVE_PODCAST_EPISODE';

export const saveSinglePodcastEpisode = (episode) => {
  return (dispatch) => {
    return PodcastApiUtil.saveSinglePodcastEpisode(episode).then(episode => dispatch(receiveSinglePodcastEpisode(episode)))
  }
}

export const receiveSinglePodcastEpisode = episode => {
  type: SAVE_PODCAST_EPISODE,
  episode
}
