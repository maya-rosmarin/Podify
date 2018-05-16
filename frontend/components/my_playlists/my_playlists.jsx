import React from 'react';
import Modal from '../modal/modal';

class MyPlaylists extends React.Component {
  constructor (props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllUserPlaylists(this.props.currentUserId);
  }

  render () {
    return (
      <div>
        <Modal />
        <form>
          <button className="playlist-button" onClick={() => this.props.openModal(<Modal />)}>NEW PLAYLIST</button>
        </form>
      </div>
    )
  }

}

export default MyPlaylists;
