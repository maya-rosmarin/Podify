import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUserEpisodes, deleteSinglePodcastEpisode } from '../../actions/episode_actions';
import MyPodcasts from './my_podcasts';

const mapStateToProps = (state) => {
  return {
    my_episodes: state.entities.localPodcasts.episodes,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserEpisodes: (user_id) => { return dispatch(fetchAllUserEpisodes(user_id)) },
    deleteSinglePodcastEpisode: (episode) => {
      return dispatch(deleteSinglePodcastEpisode(episode))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPodcasts);
