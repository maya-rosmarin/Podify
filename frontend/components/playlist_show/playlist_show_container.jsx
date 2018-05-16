import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchAllUserPlaylists } from '../../actions/playlist_actions';

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
    deletePlaylistById: (playlistId) => dispatch(deletePlaylistById(playlistId)),
    fetchAllUserPlaylists: (userId) => dispatch(fetchAllUserPlaylists(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
