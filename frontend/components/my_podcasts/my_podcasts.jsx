import React from 'react';

class MyPodcasts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllUserEpisodes(this.props.currentUserId);
  }

  render () {
    let episodes;
    if (this.props.my_episodes) {
      episodes = this.my_episodes.map((episode) => {
        <li>{episode.title}</li>
      })
    } else {
      episodes = "";
    }
    return (
      <div>
        {episodes}
      </div>
    )
  }
}

export default MyPodcasts;
