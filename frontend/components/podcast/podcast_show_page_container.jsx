import { connect } from 'react-redux';
import PodcastShowPage from './podcast_show_page';
import { requestAllPodcasts } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    collectionId: ownProps.match.params.collectionId,
    currentPodcast: state.entities.remotePodcasts[ownProps.match.params.collectionId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPodcasts: (searchQuery) => {
      return dispatch(requestAllPodcasts(searchQuery))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastShowPage);
