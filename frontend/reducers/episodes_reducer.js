import { SAVE_PODCAST_EPISODE, RECEIVE_ALL_USER_EPISODES, DELETE_PODCAST_EPISODE, ADD_EPISODE_TO_STATE } from '../actions/episode_actions';
import { RECEIVE_ALL_PLAYLIST_EPISODES } from '../actions/playlist_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_PODCAST_EPISODE:
      return merge({}, state, action.episode)
    case RECEIVE_ALL_USER_EPISODES:
      return merge({}, state, action.episodes)
    case DELETE_PODCAST_EPISODE:
      const newState = merge({}, state)
      delete newState[action.episodeId]
      return newState;
    case ADD_EPISODE_TO_STATE:
      return merge({}, state, { selectedEpisodeId: action.episodeId })
    case RECEIVE_ALL_PLAYLIST_EPISODES:
      return merge({}, state, action.episodes)
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}
