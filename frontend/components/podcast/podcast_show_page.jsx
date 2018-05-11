import React from 'react';

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
    debugger
    if (this.props.match.params.collectionName !== nextProps.match.params.collectionName) {
      this.props.requestSinglePodcast(nextProps.match.params.collectionName)
    };
    if (!this.props.currentPodcast && nextProps.currentPodcast) {
      debugger
      this.props.requestPodcastEpisodes(nextProps.currentPodcast.feedUrl)
    }
  }

  render () {
    let podcast, episodes;
    if (this.props.currentPodcast) {
      debugger
      podcast = <li><img className="podcast-artwork" src={this.props.currentPodcast.artworkUrl600} /></li>
        if (this.props.currentPodcastEpisodes) {
          debugger
          episodes = this.props.currentPodcastEpisodes.map((episode) =>
            <li>{episode.title}</li>
          )
        }
    } else {
    }
    let title = this.props.match.params.collectionName;
    return (
      <div className="podcast-episode-index">
        <h1 className="show-page-title">{title}</h1>
        <p className="podcast-artwork-show">{podcast}</p>
        <p className="episode-index-item">{episodes}</p>
      </div>
    )
  }
};
export default PodcastShowPage;
