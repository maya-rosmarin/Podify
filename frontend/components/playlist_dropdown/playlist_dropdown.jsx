import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllUserPlaylists(this.props.currentUserId);
  }

  handleSubmit (episodeId, playlistId) {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();
      
      this.props.addEpisodeToPlaylist(episodeId, playlistId);
    }
  }

  render () {
    let playlists;
    if (this.props.my_playlists) {
      playlists = this.props.my_playlists.map((playlist, idx) => <li><button onClick={this.handleSubmit(this.props.episodeId, playlist.id)}>{playlist.title}</button></li>)
    }
    return (
    <div>
      <ul className="episode-index">{playlists}</ul>
    </div>
    )
  }
}

// <form onSubmit={this.handleSubmit}>
//   <button className="green-button" id="create-playlist-button">ADD TO PLAYLIST</button>
// </form>

export default NewPlaylistForm;
