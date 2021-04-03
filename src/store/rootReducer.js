import {combineReducers} from 'redux';
import allSitesReducers from './sections/sites/all-sites/all-sites.reducers';
import loginReducers from './sections/login/login.reducers';

const reducers = () => ({
    loginReducers,
    allSitesReducers
});

export default combineReducers(reducers());
