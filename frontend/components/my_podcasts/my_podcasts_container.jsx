import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUserEpisodes, deleteSinglePodcastEpisode, addEpisodeToState } from '../../actions/episode_actions';
import { openModal } from '../../actions/modal_actions';
import MyPodcasts from './my_podcasts';

const mapStateToProps = (state) => {
  return {
    my_episodes: Object.values(state.entities.localPodcasts),
    currentUserId: state.session.id,
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserEpisodes: () => { return dispatch(fetchAllUserEpisodes()) },
    deleteSinglePodcastEpisode: (episodeId) => {
      return dispatch(deleteSinglePodcastEpisode(episodeId))},
    addEpisodeToState: (episodeId) => dispatch(addEpisodeToState(episodeId)),
    openModal: (modal) => { return dispatch(openModal(modal)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPodcasts);
