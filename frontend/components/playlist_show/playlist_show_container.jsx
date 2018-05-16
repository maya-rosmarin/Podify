import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylistById: (playlistId) => dispatch(deletePlaylistById(playlistId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
