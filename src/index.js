import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import { Store } from './store';
import Base from './Components/Base';

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Base>
        <Router />
      </Base>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
