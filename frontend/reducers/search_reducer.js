import { RECEIVE_ALL_PODCASTS, RECEIVE_PODCAST } from '../actions/search_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PODCASTS:
      const newState = merge({}, state)
      action.podcasts.map((podcast) => newState[podcast.collectionId] = podcast )
      return newState;
    case RECEIVE_PODCAST:
      const otherNewState = merge({}, state)
      otherNewState[action.podcast.collectionId] = action.podcast;
      return otherNewState;
    default:
      return state;
  }
}
