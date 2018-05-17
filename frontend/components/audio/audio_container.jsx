import { connect } from 'react-redux';
import { setCurrentEpisode, playCurrentEpisode, pauseCurrentEpisode } from '../../actions/audio_actions'
import Audio from './audio';

const mapStateToProps = state => {
  let currentEpisodeRemote;
  if (state.entities.remotePodcasts.episodes) {
    currentEpisodeRemote = state.entities.remotePodcasts.episodes.filter(episode => episode.id === state.audio.currentEpisodeId)[0];
  };
  debugger
  return {
    currentEpisodeId: state.audio.currentEpisodeId,
    currentEpisodeLocal: state.entities.localPodcasts[state.audio.currentEpisodeId],
    currentEpisodeRemote: currentEpisodeRemote,
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
