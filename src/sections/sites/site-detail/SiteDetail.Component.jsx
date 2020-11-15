import React from 'react';
import './SiteDetail.Component.css';
import {MDBBtn, MDBContainer} from 'mdbreact';
import {useDispatch, useSelector} from 'react-redux';
import {setShowSiteDetailFlagAction} from '../../../store/sections/sites/all-sites/all-sites.actions';
import {validateData} from '../../../commons/utils/utils-data';

export const SiteDetailComponent = () => {
    const dispatch = useDispatch();
    const siteSelected = useSelector(state => state.allSitesReducers.siteSelected);
    return (
        <MDBContainer fluid>
            <h1>{validateData(siteSelected.name)}</h1>
            <h3>{validateData(siteSelected.description)}</h3>
            <MDBBtn color="primary" onClick={() => dispatch(setShowSiteDetailFlagAction(false))}>Volver</MDBBtn>
        </MDBContainer>
    );
};