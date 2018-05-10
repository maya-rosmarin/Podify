import { RECEIVE_ALL_PODCASTS } from '../actions/search_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PODCASTS:
    debugger
      const newState = merge({}, state)
      action.podcasts.map((podcast) => newState[podcast.collectionId] = podcast )
      return newState;
    default:
      return state;
  }
}
