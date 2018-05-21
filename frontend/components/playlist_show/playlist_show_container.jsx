import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { closeModal } from '../../actions/modal_actions';
import { fetchAllUserPlaylists, deletePlaylist, receiveAllPlaylistEpisodes, fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  
  let playlistEpisodeIds = [];
  if (state.entities.playlists[ownProps.match.params.playlistId] && state.entities.playlists[ownProps.match.params.playlistId].episodes) {
    playlistEpisodeIds = state.entities.playlists[ownProps.match.params.playlistId].episodes
  };
  return {
    currentUserId: state.session.id,
    playlistId: ownProps.match.params.playlistId,
    currentPlaylist: state.entities.playlists[ownProps.match.params.playlistId],
    playlistEpisodes: playlistEpisodeIds.map(id => state.entities.localPodcasts[id])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    fetchAllUserPlaylists: (userId) => dispatch(fetchAllUserPlaylists(userId)),
    closeModal: () => dispatch(closeModal()),
    receiveAllPlaylistEpisodes: (playlistId) => dispatch(receiveAllPlaylistEpisodes(playlistId)),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
