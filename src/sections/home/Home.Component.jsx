import React from 'react';
import {SideMenuComponent} from './side-nav/SideMenu.Component';
import {MDBContainer} from 'mdbreact';

export const HomeComponent = () => {

    return (
        <MDBContainer fluid>
            <SideMenuComponent/>
        </MDBContainer>
    );
};