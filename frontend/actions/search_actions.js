import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ALL_PODCASTS = 'RECEIVE_ALL_PODCASTS';

export const requestAllPodcasts = (searchQuery) => {
  return (dispatch) => {
    return SearchApiUtil.fetchSearchResults(searchQuery).then((podcasts) => dispatch(receiveAllPodcasts(podcasts)))
  };
};

export const receiveAllPodcasts = (podcasts) => {
  return {
    type: RECEIVE_ALL_PODCASTS,
    podcasts
  };
};
