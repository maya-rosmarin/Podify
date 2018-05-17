import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { closeModal } from '../../actions/modal_actions';
import { fetchAllUserPlaylists, deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUserId: state.session.id,
    playlistId: ownProps.match.params.playlistId,
    currentPlaylist: state.entities.playlists[ownProps.match.params.playlistId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    fetchAllUserPlaylists: (userId) => dispatch(fetchAllUserPlaylists(userId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
