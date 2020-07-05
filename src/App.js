import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {WelcomeComponent} from './sections/welcome-component/Welcome.Component';

const App = () => {
    return (
       <WelcomeComponent/>
    );
}

export default App;
