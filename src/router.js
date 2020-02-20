import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {App} from './routes/App'
import {About} from './routes/About'
const Router = () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/about" exact component={About} />
  </Switch>
)

export default Router
