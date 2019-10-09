import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import './styles/styles.scss';

import routes from "./routes";
import mainReducer from './redux/reducers/index'

const store = createStore(
    mainReducer,
    applyMiddleware(thunkMiddleware)
);

class App extends React.Component {
  render() {
    return (
      <Switch>
        {routes.map((item, idx) => <Route key={idx} {...item} />)}
      </Switch>
    )
  }
}

ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));