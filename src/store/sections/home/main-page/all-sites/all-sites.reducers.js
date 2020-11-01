import {SHOW_SITE_DETAIL} from './all-sites.actions';

const initialState = {
    showDetailSiteFlag: false
};

const allSitesReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case SHOW_SITE_DETAIL:
            return {...state, showDetailSiteFlag: action.value};
        default:
            return state;
    }
};

export default allSitesReducers;