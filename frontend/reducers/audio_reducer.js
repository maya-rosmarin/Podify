import { SET_CURRENT_EPISODE, PLAY_CURRENT_EPISODE, PAUSE_CURRENT_EPISODE } from '../actions/audio_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_EPISODE:
      return merge({}, state, {currentEpisodeId: action.currentEpisodeId})
    case PLAY_CURRENT_EPISODE:
      return merge({}, state, { currentEpisodePlaying: true })
    case PAUSE_CURRENT_EPISODE:
      return merge({}, state, { currentEpisodePlaying: false })
    default:
      return state;
  }
}
