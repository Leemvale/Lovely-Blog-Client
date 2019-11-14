import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../../routes';

const Main = () => {
  return(
    <Fragment>
      <nav className="navigation">
        <div className="navigation__items container">
          <div className="navigation__auth">
            <span>Logout</span>
          </div>
        </div>
      </nav>

      <div className="container">
        <Switch>
          {routes.map((item, idx) => <Route key={idx} {...item} />)}
        </Switch>
      </div>
    </Fragment>
  )          
}

export default Main;