import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUserEpisodes } from '../../actions/episode_actions';
import MyPodcasts from './my_podcasts';

const mapStateToProps = (state) => {
  return {
    my_episodes: state.entities.localPodcasts.episodes,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserEpisodes: (user_id) => { return dispatch(fetchAllUserEpisodes(user_id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPodcasts);
