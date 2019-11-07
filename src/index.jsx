import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import history from './history';
import { store } from './redux/store';
import Main from 'components/core/main/Main';

import './styles/styles.scss';

const App = () => {
    return (
      <Provider store={ store }>
        <Router history={ history }>
          <Main/>
        </Router>
      </Provider>
    )
}

const HotApp = hot(App);

ReactDom.render(<HotApp/>, document.getElementById('root'));