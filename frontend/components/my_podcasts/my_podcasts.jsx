import React from 'react';
import Episode from '../episode/episode';

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
        return <li><Episode episode={episode} /></li>
      })
      debugger
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
