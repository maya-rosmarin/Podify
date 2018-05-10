import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ALL_PODCASTS = 'RECEIVE_ALL_PODCASTS';

export const requestAllPodcasts = (searchQuery) => {
  return (dispatch) => {
    return SearchApiUtil.fetchSearchResults(searchQuery)
      .then(null,
        (response) => {
          dispatch(receiveAllPodcasts(JSON.parse(response.responseText).results))
        })
  };
};

export const receiveAllPodcasts = (podcasts) => {
  return {
    type: RECEIVE_ALL_PODCASTS,
    podcasts
  };
};
