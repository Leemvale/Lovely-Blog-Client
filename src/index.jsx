import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router } from 'react-router'
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import routes from "./routes";
import history from './history';
import { store } from './redux/store';

import './styles/styles.scss';

const App = () => {
    return (
      <Provider store={ store }>
        <Router history={ history }>
          <Switch>
            {routes.map((item, idx) => <Route key={idx} {...item} />)}
          </Switch>
        </Router>
      </Provider>
    )
}

const HotApp = hot(App);

ReactDom.render(<HotApp/>, document.getElementById('root'));