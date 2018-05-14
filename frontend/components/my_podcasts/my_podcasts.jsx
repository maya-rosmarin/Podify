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
    debugger
    if (this.props.my_episodes) {
      debugger
      episodes = this.props.my_episodes.map((episode) => {
        return <li>{episode.title}</li>
      })
      debugger
    } else {
      episodes = "";
    }
    debugger
    return (
      <div>
        {episodes}
      </div>
    )
  }
}

export default MyPodcasts;
