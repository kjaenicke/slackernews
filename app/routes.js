import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'

import TopStories from './components/TopStories'
import NewStories from './components/NewStories';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TopStories} />
    <Route path="top" component={TopStories} />
    <Route path="new" component={NewStories} />
  </Route>
);
