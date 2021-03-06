import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUserPlaylists, createNewPlaylist, addEpisodeToPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import MyPlaylists from './my_playlists';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    my_playlists: Object.values(state.entities.playlists),
    currentUserId: state.session.id,
    modal: state.modal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserPlaylists: (currentUserId) => { return dispatch(fetchAllUserPlaylists(currentUserId)) },
    createNewPlaylist: (playlistTitle) => { return dispatch(createNewPlaylist(playlistTitle)) },
    addEpisodeToPlaylist: (episodeId, playlistId) => { return dispatch(addEpisodeToPlaylist(episodeId, playlistId)) },
    deletePlaylist: (playlistId) => { return dispatch(deletePlaylist(playlistId)) },
    openModal: (modal) => { return dispatch(openModal(modal)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylists);
