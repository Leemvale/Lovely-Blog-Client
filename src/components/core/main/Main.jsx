import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../../routes';

const Main = () => {
  return(
    <div className="container">
    <Switch>
      {routes.map((item, idx) => <Route key={idx} {...item} />)}
    </Switch>
    </div>
  )          
}

export default Main;