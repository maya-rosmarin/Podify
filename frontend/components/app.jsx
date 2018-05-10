import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import PodcastShowPageContainer from './podcast/podcast_show_page_container';

const App = () => {
    return ( <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
)
};

export default App;
