import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { HashRouter, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const Root = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
