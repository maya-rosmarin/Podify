import React from 'react';
import { Route } from 'react-router-dom';
import SearchFormContainer from '../search/search_form_container';
import Nav from '../nav/nav';
import Audio from '../audio/audio';
import PodcastShowPageContainer from '../podcast/podcast_show_page_container';
import MyPodcastsContainer from '../my_podcasts/my_podcasts_container';

const Main = (props) => {
  return (
    <div className="main-container">
      <Nav className="nav-meta" currentUser={props.currentUser} logout={props.logout} />
      <Route path="/podcasts/:collectionName" component={PodcastShowPageContainer} />
      <Route exact path="/search" component={SearchFormContainer} />
      <Route path="/my_podcasts" component={MyPodcastsContainer} />
    </div>
  );
};

export default Main;
