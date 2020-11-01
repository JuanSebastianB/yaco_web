import React from 'react';
import './MainPage.Component.css';

import {MostVisitedSitesComponent} from './most-visited-sites/MostVisitedSites.Component';
import {AllSitesComponent} from './all-sites/AllSites.Component';
import {MDBContainer} from 'mdbreact';
import {SiteDetailComponent} from './site-detail/SiteDetail.Component';
import {useSelector} from 'react-redux';

export const MainPageComponent = () => {
    const showDetailSiteFlag = useSelector(state => state.allSitesReducers.showDetailSiteFlag);
    return (
        showDetailSiteFlag ? <SiteDetailComponent/> :
        <MDBContainer fluid>
            <MostVisitedSitesComponent/>
            <AllSitesComponent/>;
        </MDBContainer>
    );
};