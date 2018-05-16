import React from 'react';

class PlaylistShow extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {

  }

  handleDelete (playlistId) {
    return (e) => {
      e.preventDefault();
      this.props.deletePlaylistById(playlistId)
    }
  }

  render () {
    return (
      <div>
        <button className="playlist-button" onClick={this.handleDelete} >DELETE PLAYLIST</button>
      </div>
    )
  }
}

export default PlaylistShow;
