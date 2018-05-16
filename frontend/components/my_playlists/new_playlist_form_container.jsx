import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUserPlaylists, createNewPlaylist, addEpisodeToPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import NewPlaylistForm from './new_playlist_form';
import { closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createNewPlaylist: (playlistTitle) => dispatch(createNewPlaylist(playlistTitle))
  }
}

export default connect(null, mapDispatchToProps)(NewPlaylistForm);
