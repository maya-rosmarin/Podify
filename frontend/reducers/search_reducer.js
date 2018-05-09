import { RECEIVE_ALL_PODCASTS } from '../actions/search_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PODCASTS:
      return merge({}, state, action.podcasts)
    default:
      return state;
  }
}
