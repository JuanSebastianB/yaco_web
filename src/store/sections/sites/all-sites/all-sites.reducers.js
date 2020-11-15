import {ALL_SITES, SHOW_SITE_DETAIL, SITE_SELECTED} from './all-sites.actions';

const initialState = {
    showDetailSiteFlag: false,
    allSites: [],
    siteSelected: {}
};

const allSitesReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case SHOW_SITE_DETAIL:
            return {...state, showDetailSiteFlag: action.value};
        case ALL_SITES:
            return {...state, allSites: action.value};
        case SITE_SELECTED:
            return {...state, siteSelected: action.value};
        default:
            return state;
    }
};

export default allSitesReducers;