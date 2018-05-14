import { SAVE_PODCAST_EPISODE, RECEIVE_ALL_USER_EPISODES, DELETE_PODCAST_EPISODE } from '../actions/episode_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_PODCAST_EPISODE:
      const newState = merge({}, state)
      newState[action.episode.id] = action.episode
      return newState
    case RECEIVE_ALL_USER_EPISODES:
      return merge({}, state, {episodes: action.episodes})
    case DELETE_PODCAST_EPISODE:
      const newNewState = merge({}, state)
      delete newNewState[action.episode.id]
      return newNewState;
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}
