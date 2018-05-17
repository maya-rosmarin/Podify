import React from 'react';
import EpisodeContainer from '../episode/episode_container';

class PlaylistShow extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllUserPlaylists(this.props.currentUserId);
    this.props.receiveAllPlaylistEpisodes(this.props.playlistId);
  }

  handleDelete (playlistId) {
    return (e) => {
      e.preventDefault();
      this.props.deletePlaylist(playlistId).then(() => this.props.history.push("/my_playlists")).then(this.props.closeModal())
    }
  }

  render () {
    let currentPlaylistTitle, playlistEpisodes;
    if (this.props.currentPlaylist) {
      currentPlaylistTitle = this.props.currentPlaylist.title
    } else {
      currentPlaylistTitle = "";
    }
    if (this.props.playlistEpisodes) {
      playlistEpisodes = this.props.playlistEpisodes.map((episode) => <li><EpisodeContainer episode={episode} /></li>)
    }
    return (
      <div>
        <h1 className="show-page-title">{currentPlaylistTitle}</h1>
        <ul className="show-page-title" id="playlist-show-index-item">{playlistEpisodes}</ul>
        <button className="playlist-button" onClick={this.handleDelete(this.props.playlistId)}>DELETE PLAYLIST</button>
      </div>
    )
  }
}

export default PlaylistShow;
