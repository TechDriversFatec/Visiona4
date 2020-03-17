import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {About} from './routes/About'
import {Map} from './routes/Map'

const Router = () => (
  <Switch>
    <Route path="/" exact component={Map} />
    <Route path="/about" exact component={About} />
  </Switch>
)

export default Router
