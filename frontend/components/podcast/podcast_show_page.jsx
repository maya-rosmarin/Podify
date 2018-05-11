import React from 'react';
import FaMusic from 'react-icons/lib/fa/music';

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
      podcast = <div><img src={this.props.currentPodcast.artworkUrl600} /></div>
        if (this.props.currentPodcastEpisodes) {
          debugger
          episodes = this.props.currentPodcastEpisodes.map((episode) =>
            <div><button className="musical-note-button">< FaMusic /></button>    {episode.title}   </div>
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
        <div className="episode-index"><p>{episodes}</p></div>
      </div>
    )
  }
};
export default PodcastShowPage;
