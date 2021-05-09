import React, { useState } from 'react';
import './HeaderWelcome.Component.css';
import { HeaderWelcomeLabels } from './HeaderWelcome.Labels';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdbreact';
import logoImage from '../../../assets/images/imagotipo_transparency.png';
import { LOGIN_PATH, REGISTER_PATH } from '../../../commons/constants/paths.const';
import { useHistory } from 'react-router-dom';
import { addToHistory } from '../../../commons/utils/utils-routing';

export const HeaderWelcomeComponent = () => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (<MDBNavbar dark expand='md'>
      <MDBNavbarBrand>
        <img src={logoImage} className='img-fluid' alt='logo YACO'/>
      </MDBNavbarBrand>
      <MDBNavbarToggler image={HeaderWelcomeLabels.hamburgerIconPath} onClick={() => toggleCollapse()}/>
      <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to='#!' className='black-text'>Conocenos</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='#!' className='black-text'>Que hacemos</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <button type='button' className='btn btn-outline-primary waves-effect'
                    onClick={() => addToHistory(history, REGISTER_PATH)}>Quiero publicar
            </button>
          </MDBNavItem>
          <MDBNavItem>
            <button type='button' className='btn btn-outline-success waves-effect'
                    onClick={() => addToHistory(history, REGISTER_PATH)}>Registrate
            </button>
          </MDBNavItem>
          <MDBNavItem>
            <button type='button' className='btn btn-outline-default waves-effect'
                    onClick={() => addToHistory(history, LOGIN_PATH)}>Ingresa
            </button>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>);
};
