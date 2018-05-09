import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import SearchFormContainer from './search/search_form_container';

const App = () => (
  <div>
    <h2 className="logo-header" ><FaVolumeUp />  Podify</h2>
    <Route exact path={"/"} component={GreetingContainer} />
    <Route path={"/search"} component={SearchFormContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
