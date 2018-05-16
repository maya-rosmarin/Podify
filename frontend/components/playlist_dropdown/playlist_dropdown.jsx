import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllUserPlaylists(this.props.currentUserId);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.closeModal()
  }

  render () {
    let playlists;
    if (this.props.my_playlists) {
      playlists = this.props.my_playlists.map((playlist) => <li>{playlist.title}</li>)
    }
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <ul className="episode-index">{playlists}</ul>
        <button className="green-button" id="create-playlist-button">ADD TO PLAYLIST</button>
      </form>
    </div>
    )
  }
}

export default NewPlaylistForm;
