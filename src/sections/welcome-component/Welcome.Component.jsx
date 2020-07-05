import React from 'react';
import './Welcome.Component.css';
import {MDBContainer} from 'mdbreact';
import {HeaderWelcomeComponent} from './header-page/HeaderWelcome.Component';
import {BodyWelcomeComponent} from './body-page/BodyWelcome.Component';
import {FooterWelcomeComponent} from "./footer-page/FooterWelcome.Component";

export const WelcomeComponent = () => {

    return (
        <MDBContainer fluid>
            <HeaderWelcomeComponent/>
            <BodyWelcomeComponent/>
            <FooterWelcomeComponent/>
        </MDBContainer>
    )
};