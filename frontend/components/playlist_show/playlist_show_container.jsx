import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { closeModal } from '../../actions/modal_actions';
import { fetchAllUserPlaylists, deletePlaylist, receiveAllPlaylistEpisodes } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUserId: state.session.id,
    playlistId: ownProps.match.params.playlistId,
    currentPlaylist: state.entities.playlists[ownProps.match.params.playlistId],
    playlistEpisodes: Object.values(state.entities.localPodcasts)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    fetchAllUserPlaylists: (userId) => dispatch(fetchAllUserPlaylists(userId)),
    closeModal: () => dispatch(closeModal()),
    receiveAllPlaylistEpisodes: (playlistId) => dispatch(receiveAllPlaylistEpisodes(playlistId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
