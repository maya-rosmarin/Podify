import React from 'react';
import EpisodeContainer from '../episode/episode_container';
import FaDownload from 'react-icons/lib/fa/download';

class PodcastShowPage extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      e.preventDefault();
      debugger
      episode.collection_name = localStorage.getItem('collectionName')
      this.props.saveSinglePodcastEpisode(episode)
    }
  }

  render () {
      let podcast, episodes, title;
      if (this.props.currentPodcast) {
        podcast = <div><img src={this.props.currentPodcast.artworkUrl600} /></div>
          title = this.props.match.params.collectionName;
          localStorage.setItem("collectionName", title);
          if (this.props.currentPodcastEpisodes) {
            episodes = this.props.currentPodcastEpisodes.map((episode) => {

            return (
              <form onSubmit={this.handleSubmit(episode)} className="episode-index-item">
                <EpisodeContainer episode={episode} collectionName={this.props.collectionName} image={this.props.currentPodcast.artworkUrl600}/>
                <button className="save-button"><FaDownload /></button>
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
            <br />
            <br />
            <br />
            <div className="podcast-show-art">{podcast}</div>
          </div>
          <div className="episode-index">{episodes}</div>
        </div>
      )
    }
};
export default PodcastShowPage;
