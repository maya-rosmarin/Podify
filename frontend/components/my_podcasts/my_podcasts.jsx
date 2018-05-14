import React from 'react';
import Episode from '../episode/episode';
import FaTrashCan from 'react-icons/lib/fa/trash';

class MyPodcasts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllUserEpisodes(this.props.currentUserId);
  }

  render () {
    let episodes;
    debugger
    if (this.props.my_episodes) {
      debugger
      episodes = this.props.my_episodes.map((episode) => {
        return <li className="my-podcast-index-item episode-index-item"><Episode episode={episode} /><FaTrashCan className="trashcan"/></li>
      })
    } else {
      episodes = "";
    }
    debugger
    return (
      <div>
        <h1 className="show-page-title">Your Podcasts</h1>
        <div className="episode-index">{episodes}</div>
      </div>
    )
  }
}

export default MyPodcasts;
