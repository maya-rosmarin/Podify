import React from 'react';
import Modal from '../modal/modal';
import NewPlaylistFormContainer from './new_playlist_form_container';
import { Link } from 'react-router-dom';

class MyPlaylists extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllUserPlaylists(this.props.currentUserId);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.openModal(<Modal component={<NewPlaylistFormContainer />} />)
  }

  render () {
      const playlists = this.props.my_playlists.map(playlist => <li><Link to={'/my_playlists/' + playlist.id}
       className="playlist-index-item">{playlist.title}</Link></li>)
    return (
      <div>
        <h1 className="show-page-title">Your Playlists</h1>
        {this.props.modal}
        <form onSubmit={this.handleSubmit}>
          <button className="playlist-button">NEW PLAYLIST</button>
        </form>
        <ul>{playlists}</ul>
      </div>
    )
  }

}

export default MyPlaylists;
