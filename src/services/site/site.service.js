import {getRequest} from '../commons/wrapper';
import {apiHostSite} from '../commons/paths';

export const getAllSitesService = () =>
    getRequest(apiHostSite());