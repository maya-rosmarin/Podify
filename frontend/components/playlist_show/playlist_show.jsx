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
      this.props.deletePlaylistById(playlistId)
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
        <button className="playlist-button" onClick={this.handleDelete} >DELETE PLAYLIST</button>
      </div>
    )
  }
}

export default PlaylistShow;
