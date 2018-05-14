import { SAVE_PODCAST_EPISODE, RECEIVE_ALL_USER_EPISODES } from '../actions/episode_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_PODCAST_EPISODE:
      const newState = merge({}, state)
      newState[episode.id] = episode
      return newState
    case RECEIVE_ALL_USER_EPISODES:
      return merge({}, state, {episodes: action.episodes})
    default:
      return state;
  }
}
