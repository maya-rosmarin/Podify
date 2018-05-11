import React from 'react';

class PodcastShowPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestSinglePodcast(this.props.match.params.collectionName)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.collectionName !== nextProps.match.params.collectionName) {
      this.props.requestSinglePodcast(nextProps.match.params.collectionName)
    };
  };

  render () {
    debugger
    let trackNames;
    if (this.props.currentPodcast) {
      trackNames = this.props.currentPodcast.map((podcast) => <li>{podcast.trackName} <img className="podcast-artwork" src={podcast.artworkUrl600} /></li>)
      // this.setState({artwork: this.props.currentPodcast.artworkUrl600})
    } else {
      trackNames = "";
    }
    let title = this.props.match.params.collectionName;
    return (
      <div>
        <h1 className="show-page-title">{title}</h1>
        <ul>{trackNames}</ul>
      </div>
    )
  }
};

export default PodcastShowPage;
