import React from 'react';
import { Route } from 'react-router-dom';
import SearchFormContainer from '../search/search_form_container';
import Nav from '../nav/nav';
import AudioContainer from '../audio/audio_container';
import PodcastShowPageContainer from '../podcast/podcast_show_page_container';
import MyPodcastsContainer from '../my_podcasts/my_podcasts_container';
import MyPlaylistsContainer from '../my_playlists/my_playlists_container';
import Home from '../home/home';

const Main = (props) => {
  return (
    <div className="main-container">
      <Nav className="nav-meta" currentUser={props.currentUser} logout={props.logout} />
      <AudioContainer />
      <Route path="/podcasts/:collectionName" component={PodcastShowPageContainer} />
      <Route exact path="/search" component={SearchFormContainer} />
      <Route path="/my_podcasts" component={MyPodcastsContainer} />
      <Route exact path="/my_playlists" component={MyPlaylistsContainer} />
      <Route path="/home" component={Home} />
    </div>
  );
};

export default Main;
