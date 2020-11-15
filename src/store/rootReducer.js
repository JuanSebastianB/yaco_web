import {combineReducers} from 'redux';
import allSitesReducers from './sections/sites/all-sites/all-sites.reducers';

const reducers = () => ({
    allSitesReducers
});

export default combineReducers(reducers());
