import { connect } from 'react-redux';
import PodcastShowPage from './podcast_show_page';
import { requestAllPodcasts, requestSinglePodcast, requestPodcastEpisodes } from '../../actions/search_actions';
import { saveSinglePodcastEpisode } from '../../actions/podcast_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    collectionName: ownProps.match.params.collectionName,
    currentPodcast: state.entities.remotePodcasts[ownProps.match.params.collectionName],
    currentPodcastEpisodes: state.entities.remotePodcasts.episodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPodcasts: (searchQuery) => {
      return dispatch(requestAllPodcasts(searchQuery))
    },
    requestSinglePodcast: (searchQuery) => {
      return dispatch(requestSinglePodcast(searchQuery))
    },
    requestPodcastEpisodes: (feedUrl) => {
      return dispatch(requestPodcastEpisodes(feedUrl))
    },
    saveSinglePodcastEpisode: (episode) => {
      return dispatch(saveSinglePodcastEpisode(episode))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowPage);
