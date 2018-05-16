import React from 'react';
import { withRouter } from 'react-router-dom';

class NewPlaylistForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: ''
    }
  }

  componentDidMount () {
    this.props.fetchAllUserPlaylists(this.props.currentUserId);
  }

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    this.props.history.push(`/my_playlists/${playlist.id}`).then(this.props.closeModal())
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

export default withRouter(NewPlaylistForm);
