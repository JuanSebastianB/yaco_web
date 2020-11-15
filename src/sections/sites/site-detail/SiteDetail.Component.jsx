import React from 'react';
import './SiteDetail.Component.css';
import {MDBBtn, MDBContainer} from 'mdbreact';
import {useDispatch} from 'react-redux';
import {setShowSiteDetailFlagAction} from '../../../store/sections/sites/all-sites/all-sites.actions';

export const SiteDetailComponent = () => {
    const dispatch = useDispatch();
    return (
        <MDBContainer fluid>
            <MDBBtn color="primary" onClick={() => dispatch(setShowSiteDetailFlagAction(false))}>Volver</MDBBtn>
        </MDBContainer>
    );
};