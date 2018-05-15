import { connect } from 'react-redux';
import { setCurrentEpisode, playCurrentEpisode, pauseCurrentEpisode } from '../../actions/audio_actions'
import Audio from './audio';

const mapStateToProps = state => {
  debugger
  return {
    currentEpisodeId: state.audio.currentEpisodeId,
    currentEpisode: state.entities.localPodcasts[state.audio.currentEpisodeId],
    currentEpisodePlaying: state.audio.currentEpisodePlaying
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentEpisode: (currentEpisodeId) => dispatch(setCurrentEpisode(currentEpisodeId)),
    playCurrentEpisode: () => dispatch(playCurrentEpisode()),
    pauseCurrentEpisode: () => dispatch(pauseCurrentEpisode())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
