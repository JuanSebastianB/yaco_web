import React, { useState } from 'react';
import './HeaderWelcome.Component.css';
import { HeaderWelcomeLabels } from './HeaderWelcome.Labels';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from 'mdbreact';
import logoImage from '../../../assets/images/imagotipo_transparency.png';
import { LOGIN_PATH, REGISTER_PATH } from '../../../commons/constants/paths.const';

export const HeaderWelcomeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (<MDBNavbar dark expand='md'>
    <MDBNavbarBrand>
      <img src={logoImage} className='img-fluid' alt='logo YACO'/>
    </MDBNavbarBrand>
    <MDBNavbarToggler image={HeaderWelcomeLabels.hamburgerIconPath} onClick={() => setIsOpen(!isOpen)}/>
    <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to={REGISTER_PATH} className='black-text header-item-option'>{HeaderWelcomeLabels.wantPublish}</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to={REGISTER_PATH} className='black-text header-item-option'>{HeaderWelcomeLabels.register}</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to={LOGIN_PATH} className='black-text header-item-option'>{HeaderWelcomeLabels.login}</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>);
};
