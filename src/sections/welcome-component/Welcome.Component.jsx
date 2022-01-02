import React from 'react';
import './Welcome.Component.css';
import { HeaderWelcomeComponent } from './header-page/HeaderWelcome.Component';
import { BodyWelcomeComponent } from './body-page/BodyWelcome.Component';
import { FooterWelcomeComponent } from './footer-page/FooterWelcome.Component';

export const WelcomeComponent = () => {
  return (<div className={'space-margin-sides-layout-yaco'}>
    <HeaderWelcomeComponent/>
    <BodyWelcomeComponent/>
    <FooterWelcomeComponent/>
  </div>);
};