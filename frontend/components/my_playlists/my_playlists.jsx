import React from 'react';
import Modal from '../modal/modal';
import NewPlaylistFormContainer from './new_playlist_form_container';
import { Link } from 'react-router-dom';

class MyPlaylists extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllUserPlaylists(this.props.currentUserId);
  }

  render () {
    debugger
    let playlists;
    if (this.props.my_playlists) {
      playlists = this.props.my_playlists.map(playlist => <li><Link to={'/my_playlists/' + playlist.id}
       className="playlist-index-item">{playlist.title}</Link></li>)
    } else {
      playlists = "";
    }
    return (
      <div>
        <h1 className="show-page-title">Your Playlists</h1>
        <Modal />
        <form>
          <button className="playlist-button" onClick={() => this.props.openModal(<Modal component={<NewPlaylistFormContainer />}/>)}>NEW PLAYLIST</button>
        </form>
        <ul>{playlists}</ul>
      </div>
    )
  }

}

export default MyPlaylists;
