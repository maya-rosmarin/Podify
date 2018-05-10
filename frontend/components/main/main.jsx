import React from 'react';
import { Route } from 'react-router-dom';
import SearchFormContainer from '../search/search_form_container';
import Nav from '../nav/nav';

const Main = (props) => {
  return (
    <div className="main-container">
      <Nav className="nav-meta" currentUser={props.currentUser} logout={props.logout} />
      <Route exact path="/search" component={SearchFormContainer} />
    </div>
  );
};

export default Main;