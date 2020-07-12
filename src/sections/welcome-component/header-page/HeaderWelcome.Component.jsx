import React, {useState} from 'react';
import './HeaderWelcome.Component.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logoImage from '../../../assets/images/imagotipo_transparency.png';

export const HeaderWelcomeComponent = () => {

    const [isOpen, setIsOpen] = useState(false);


    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
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
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab className="black-text" icon="twitter" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab className="black-text" icon="google-plus-g" />
                            </MDBNavLink>
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
        </Router>
    )
};