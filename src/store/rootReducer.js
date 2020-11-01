import {combineReducers} from 'redux';
import allSitesReducers from './sections/home/main-page/all-sites/all-sites.reducers';

const reducers = () => ({
    allSitesReducers
});

export default combineReducers(reducers());
