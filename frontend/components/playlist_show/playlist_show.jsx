import React from 'react';
import EpisodeContainer from '../episode/episode_container';

class PlaylistShow extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  handleDelete (playlistId) {
    return (e) => {
      e.preventDefault();
      this.props.deletePlaylist(playlistId).then(() => this.props.history.push("/my_playlists")).then(this.props.closeModal())
    }
  }

  render () {
    
    let currentPlaylistTitle, playlistEpisodes;
    let playlistLength = 0;
    if (this.props.currentPlaylist) {
      currentPlaylistTitle = this.props.currentPlaylist.title
    } else {
      currentPlaylistTitle = "";
    }
    if (this.props.playlistEpisodes) {
      playlistEpisodes = this.props.playlistEpisodes.map((episode, idx) => <li className="episode-item">{idx+1}.<EpisodeContainer episode={episode} /></li>)
      playlistLength = playlistEpisodes.length
    }
    return (
      <div>
        <h1 className="show-page-title">{currentPlaylistTitle}</h1>
        <h5 id="num-podcasts">{playlistLength} podcasts</h5>
        <ul className="show-page-title" id="playlist-show-index-item">{playlistEpisodes}</ul>
        <button className="playlist-button" onClick={this.handleDelete(this.props.playlistId)}>DELETE PLAYLIST</button>
      </div>
    )
  }
}

export default PlaylistShow;
