import { SAVE_PODCAST_EPISODE } from '../actions/podcast_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_PODCAST_EPISODE:
      const newState = merge({}, state)
      newState[episode.id] = episode
      return newState
    default:
      return state;
  }
}
