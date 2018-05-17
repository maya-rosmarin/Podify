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

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createNewPlaylist(this.state.title).then(({playlist}) => this.props.history.push(`/my_playlists/${playlist.id}`)).then(this.props.closeModal())
  }

  render () {
    
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input className="playlist-input" type="text" placeholder="New Playlist" value={this.state.title} onChange={this.update('title')}/>
        <button className="green-button" id="create-playlist-button">CREATE</button>
      </form>
    </div>
    )
  }
}

export default withRouter(NewPlaylistForm);
