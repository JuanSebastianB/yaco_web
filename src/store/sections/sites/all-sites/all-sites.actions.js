import {getAllSitesService} from '../../../../services/site/site.service';

export const SHOW_SITE_DETAIL = 'SHOW_SITE_DETAIL';
export const ALL_SITES = 'ALL_SITES';
export const SITE_SELECTED = "SITE_SELECTED";


export const getAllSiteAction = () => dispatch => {
    getAllSitesService().then((response) =>
        // console.log(response.data)
        dispatch(setAllSiteAsync(response.data))
    ).catch((error) =>
        //TODO -> create handler error
        alert('error en el servicio allSites ')
    );
};

export const setShowSiteDetailFlagAction = (flag) => {
    return {type: SHOW_SITE_DETAIL, value: flag};
};

const setAllSiteAsync = (allSites) => {
    return {type: ALL_SITES, value: allSites};
};

export const setSiteSelectedAction = (siteSelected) => {
    return {type: SITE_SELECTED, value: siteSelected};
};