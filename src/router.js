import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {App} from './routes/App'
import {About} from './routes/About'
import {Map} from './routes/Map'

const Router = () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/about" exact component={About} />
    <Route path="/map" exact component={Map} />
  </Switch>
)

export default Router
