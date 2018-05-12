import { SAVE_PODCAST_EPISODE } from '../actions/episode_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  debugger
  switch (action.type) {
    case SAVE_PODCAST_EPISODE:
      const newState = merge({}, state)
      newState[episode.id] = episode
      return newState
    default:
      return state;
  }
}
