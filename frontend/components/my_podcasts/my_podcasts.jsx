import React from 'react';
import EpisodeContainer from '../episode/episode_container';
import FaTrashCan from 'react-icons/lib/fa/trash';
import PlaylistDropdownContainer from '../playlist_dropdown/playlist_dropdown_container';
import FaPlus from 'react-icons/lib/fa/plus';
import Modal from '../modal/modal';

class MyPodcasts extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllUserEpisodes(this.props.currentUserId);
  }

  handleDelete (id) {
      return (e) => {
        e.preventDefault();
        this.props.deleteSinglePodcastEpisode(id)
      }
  }

  handleSubmit (episodeId) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(<Modal episodeId={episodeId} component={<PlaylistDropdownContainer episodeId={episodeId} />}/>);
    }
  }

  render () {
    let episodes;
    if (this.props.my_episodes) {
      episodes = this.props.my_episodes.map((episode) => {
        return <li className="my-podcast-index-item episode-index-item"><EpisodeContainer episode={episode} collectionName={this.props.collectionName} />
        <form onSubmit={this.handleSubmit(episode.id)}><button><FaPlus className="trashcan" /></button></form>
        <form onSubmit={this.handleDelete(episode.id)}><button><FaTrashCan className="trashcan"/></button></form>
    </li>
      })
    } else {
      episodes = "";
    }
    const Modal = this.props.modal ? this.props.modal : <span></span>

    return (
      <div>
        {Modal}
        <h1 className="show-page-title">Your Podcasts</h1>
        <br />
        <br />
        <br />
        <div className="episode-index">{episodes}</div>
      </div>
    )
  }
}

export default MyPodcasts;
