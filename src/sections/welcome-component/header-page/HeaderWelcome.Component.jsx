import React, {useState} from 'react';
import './HeaderWelcome.Component.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import logoImage from '../../../assets/images/imagotipo_transparency.png';
import {LOGIN_PATH} from '../../../commons/paths.const';
import { useHistory } from "react-router-dom";


export const HeaderWelcomeComponent = () => {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);


    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    const addHistory = (path) => history.push(path);

    return (
            <MDBNavbar color="transparent" dark expand="md">
                <MDBNavbarBrand>
                    <img src={logoImage} className="img-fluid" alt="logo YACO" />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => toggleCollapse()} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="#!" className="black-text">Conocenos</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!" className="black-text">Que hacemos</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                                <button type="button" className="btn btn-outline-success waves-effect">Registrate</button>
                        </MDBNavItem>
                        <MDBNavItem>
                                <button type="button" className="btn btn-outline-default waves-effect" onClick={() => addHistory(LOGIN_PATH)}>Ingresa</button>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown >
                                <MDBDropdownToggle className="black-text" nav caret>
                                    <MDBIcon  icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default green-text" right>
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
    )
};