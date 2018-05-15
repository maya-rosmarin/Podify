import React from 'react';
import EpisodeContainer from '../episode/episode_container';
import FaTrashCan from 'react-icons/lib/fa/trash';
import FaPlus from 'react-icons/lib/fa/plus';

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

  render () {
    let episodes;
    if (this.props.my_episodes) {
      episodes = this.props.my_episodes.map((episode) => {
        return <li className="my-podcast-index-item episode-index-item"><EpisodeContainer episode={episode} collectionName={this.props.collectionName} />
        <form><button><FaPlus className="trashcan" /></button></form>
        <form onSubmit={this.handleDelete(episode.id)}><button><FaTrashCan className="trashcan"/></button></form>
    </li>
      })
    } else {
      episodes = "";
    }
    return (
      <div>
        <h1 className="show-page-title">Your Podcasts</h1>
        <br />
        <br />
        <br />
        <div className="episode-index">{episodes}</div>
      </div>
    )
  }
}
// <button className="green-button" id="narrow-button">PLAY</button>

export default MyPodcasts;
