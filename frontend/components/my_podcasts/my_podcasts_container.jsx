import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUserEpisodes, deleteSinglePodcastEpisode } from '../../actions/episode_actions';
import MyPodcasts from './my_podcasts';

const mapStateToProps = (state) => {
  return {
    my_episodes: Object.values(state.entities.localPodcasts),
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserEpisodes: () => { return dispatch(fetchAllUserEpisodes()) },
    deleteSinglePodcastEpisode: (episodeId) => {
      return dispatch(deleteSinglePodcastEpisode(episodeId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPodcasts);
