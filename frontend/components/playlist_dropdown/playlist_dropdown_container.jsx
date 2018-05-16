import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import PlaylistDropdown from './playlist_dropdown';
import { fetchAllUserPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  return {
    my_episodes: Object.values(state.entities.localPodcasts),
    my_playlists: Object.values(state.entities.playlists),
    currentUserId: state.session.id,
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserEpisodes: () => { return dispatch(fetchAllUserEpisodes()) },
    deleteSinglePodcastEpisode: (episodeId) => {
      return dispatch(deleteSinglePodcastEpisode(episodeId))},
    openModal: (modal) => { return dispatch(openModal(modal)) },
    fetchAllUserPlaylists: (userId) => dispatch(fetchAllUserPlaylists(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDropdown);
