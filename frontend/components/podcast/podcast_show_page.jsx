import React from 'react';
import Episode from '../episode/episode';

class PodcastShowPage extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit (episode) {
    return (e) => {
      debugger
      e.preventDefault();
      this.props.saveSinglePodcastEpisode(episode)
    }
  }

  render () {
      let podcast, episodes, title;
      debugger
      if (this.props.currentPodcast) {
        podcast = <div><img src={this.props.currentPodcast.artworkUrl600} /></div>
        title = this.props.currentPodcast.title
          if (this.props.currentPodcastEpisodes) {
            debugger
            episodes = this.props.currentPodcastEpisodes.map((episode) => {
              debugger
            return (
              <form onSubmit={this.handleSubmit(episode)}>
              <Episode key={episode.collectionId} episode={episode} />
              <button>Save</button>
            </form>
            )
          }
        )
      }
    } else {
      title = this.props.match.params.collectionName;
      }
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
