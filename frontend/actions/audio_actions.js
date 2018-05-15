export const SET_CURRENT_EPISODE = 'SET_CURRENT_EPISODE';
export const PLAY_CURRENT_EPISODE = 'PLAY_CURRENT_EPISODE';
export const PAUSE_CURRENT_EPISODE = 'PAUSE_CURRENT_EPISODE';

export const setCurrentEpisode = (currentEpisodeId) => {
  return (dispatch) => {
    return dispatch(setCurrentPodcastEpisode(currentEpisodeId))
  }
}

export const playCurrentEpisode = () => {
  return (dispatch) => {
    return dispatch(playCurrentPodcastEpisode())
  }
}

export const pauseCurrentEpisode = () => {
  return (dispatch) => {
    return dispatch(pauseCurrentPodcastEpisode())
  }
}

export const setCurrentPodcastEpisode = (currentEpisodeId) => {
  return {
    type: SET_CURRENT_EPISODE,
    currentEpisodeId
  }
}

export const playCurrentPodcastEpisode = () => {
  return {
    type: PLAY_CURRENT_EPISODE
  }
}

export const pauseCurrentPodcastEpisode = () => {
  return {
    type: PAUSE_CURRENT_EPISODE
  }
}
