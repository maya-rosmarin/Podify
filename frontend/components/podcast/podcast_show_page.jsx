import React from 'react';
import Episode from '../episode/episode';

class PodcastShowPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (!this.props.currentPodcast) {
      this.props.requestSinglePodcast(this.props.match.params.collectionName)
    } else {
      this.props.requestPodcastEpisodes(this.props.currentPodcast.feedUrl)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.collectionName !== nextProps.match.params.collectionName) {
      this.props.requestSinglePodcast(nextProps.match.params.collectionName)
    };
    if (!this.props.currentPodcast && nextProps.currentPodcast) {
      this.props.requestPodcastEpisodes(nextProps.currentPodcast.feedUrl)
    }
  }

  render () {
    let podcast, episodes;
    if (this.props.currentPodcast) {
      podcast = <div><img src={this.props.currentPodcast.artworkUrl600} /></div>
        if (this.props.currentPodcastEpisodes) {
          episodes = this.props.currentPodcastEpisodes.map((episode) => <Episode episode={episode} />
          )
        }
    } else {
    }
    let title = this.props.match.params.collectionName;
    return (
      <div className="podcast-episode-index">
        <div>
        <h1 className="show-page-title">{title}</h1>
        <div className="podcast-show-art">{podcast}</div>
        </div>
        <div className="episode-index">{episodes}</div>
      </div>
    )
  }
};
export default PodcastShowPage;
