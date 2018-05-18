import { RECEIVE_ALL_PODCASTS, RECEIVE_PODCAST, RECEIVE_PODCAST_EPISODES, CLEAR_PODCAST_STATE } from '../actions/search_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PODCASTS:
      const newState = merge({}, state)
      action.podcasts.map((podcast) => newState[podcast.collectionName] = podcast )
      return newState;
    case RECEIVE_PODCAST:
      const otherNewState = merge({}, state)
      otherNewState[action.podcast.collectionName] = action.podcast;
      return otherNewState;
    case RECEIVE_PODCAST_EPISODES:
      return merge({}, state, {episodes: action.episodes})
    case CLEAR_PODCAST_STATE:
      return {};
    default:
      return state;
  }
}
