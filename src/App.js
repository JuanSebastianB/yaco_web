import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {routesConst} from './commons/routing/routes.const';

const App = () => {
    return (
        <Router>
            <Switch>
                {routesConst.map((route, index) =>
                    <Route key={index} exact path={route.path} component={route.component}/>)}
            </Switch>
        </Router>
    );
}

export default App;
