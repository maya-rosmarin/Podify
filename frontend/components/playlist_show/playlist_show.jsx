import React from 'react';

class PlaylistShow extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    debugger
    this.props.fetchAllUserPlaylists(this.props.currentUserId)
  }

  handleDelete (playlistId) {
    return (e) => {
      e.preventDefault();
      this.props.deletePlaylist(playlistId).then(() => this.props.history.push("/my_playlists")).then(this.props.closeModal())
    }
  }

  render () {
    let currentPlaylistTitle;
    if (this.props.currentPlaylist) {
      debugger
      currentPlaylistTitle = this.props.currentPlaylist.title
    } else {
      currentPlaylistTitle = "";
    }
    return (
      <div>
        <h1 className="show-page-title">{currentPlaylistTitle}</h1>
        <button className="playlist-button" onClick={this.handleDelete(this.props.playlistId)}>DELETE PLAYLIST</button>
      </div>
    )
  }
}

export default PlaylistShow;
