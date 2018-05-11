import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ALL_PODCASTS = 'RECEIVE_ALL_PODCASTS';
export const RECEIVE_PODCAST = 'RECEIVE_PODCAST';
export const RECEIVE_PODCAST_EPISODES = 'RECEIVE_PODCAST_EPISODES';

export const requestAllPodcasts = (searchQuery) => {
  return (dispatch) => {
    return SearchApiUtil.fetchAllPodcasts(searchQuery)
      .then(null,
        (response) => {
          dispatch(receiveAllPodcasts(JSON.parse(response.responseText).results))
        })
  };
};

export const requestSinglePodcast = (searchQuery) => {
  return (dispatch) => {
    return SearchApiUtil.fetchSinglePodcast(searchQuery)
      .then(null,
        (response) => {
          dispatch(receiveSinglePodcast(JSON.parse(response.responseText).results[0]))
        })
  };
};

export const requestPodcastEpisodes = (feed_url) => {
  return (dispatch) => {
    return SearchApiUtil.fetchPodcastEpisodes(feed_url)
      .then(
        (episodes) => {
          dispatch(receivePodcastEpisodes(episodes))
        }
      )
  }
}

export const receiveAllPodcasts = (podcasts) => {
  return {
    type: RECEIVE_ALL_PODCASTS,
    podcasts
  };
};

export const receiveSinglePodcast = (podcast) => {
  return {
    type: RECEIVE_PODCAST,
    podcast
  };
};

export const receivePodcastEpisodes = (episodes) => {
  return {
    type: RECEIVE_PODCAST_EPISODES,
    episodes
  }
}
