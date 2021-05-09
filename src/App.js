import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import { routesConst } from './commons/constants/routes.const';

const store = configureStore();

const App = () => {
  return (<Provider store={store}>
      <Router>
        <Switch>
          {routesConst.map((route, index) => <Route key={index} exact path={route.path} component={route.component}/>)}
        </Switch>
      </Router>
    </Provider>);
};

export default App;
