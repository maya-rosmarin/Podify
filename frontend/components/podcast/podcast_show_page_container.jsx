import { connect } from 'react-redux';
import PodcastShowPage from './podcast_show_page';
import { requestAllPodcasts, requestSinglePodcast, requestPodcastEpisodes } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    collectionName: ownProps.match.params.collectionName,
    currentPodcast: state.entities.remotePodcasts[ownProps.match.params.collectionName]
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
    requestPodcastEpisodes: ({feedUrl}) => {
      return dispatch(requestPodcastEpisodes(feedUrl))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowPage);
