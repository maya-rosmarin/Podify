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
    if (!this.props.currentPodcast && nextProps.currentPodcast) {
      this.props.requestPodcastEpisodes(nextProps.currentPodcast)
    }
  };

  render () {
    let podcast;
    if (this.props.currentPodcast) {
      podcast = <li>{this.props.currentPodcast.trackName} <img className="podcast-artwork" src={this.props.currentPodcast.artworkUrl600} /></li>
    } else {
      podcast = null;
    }
    let title = this.props.match.params.collectionName;
    return (
      <div>
        <h1 className="show-page-title">{title}</h1>
        {podcast}
      </div>
    )
  }
};

export default PodcastShowPage;
