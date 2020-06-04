import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from './routes/About';
import { Map } from './routes/Map';
import { AOImap } from './routes/AOImap';

const Router = () => (
  <Switch>
    <Route path="/" exact component={Map} />
    <Route path="/about" exact component={About} />
    <Route path="/AOI" exact component={AOImap} />
  </Switch>
);

export default Router;
