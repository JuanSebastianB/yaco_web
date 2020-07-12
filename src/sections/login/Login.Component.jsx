import React from 'react';
import './Login.Component.css';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBModalFooter, MDBRow} from 'mdbreact';
import isotipoYACO from '../../assets/images/Isotipo_YACO.png'

export const LoginComponent = () => {
    return (
        <div className="bg">
            <MDBContainer className='top-space'>
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="text-center">Siga más pa' entro!</h5>
                        <img
                            src={isotipoYACO}
                            className="img-fluid rounded-circle"
                            alt=""
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBCard className="transparent-background">
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong>Ingresa: </strong>
                                    </h3>
                                </div>
                                <MDBInput
                                    label="Tu correo"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Tu contraseña"
                                    group
                                    type="password"
                                    validate
                                    containerClass="mb-0"
                                />
                                <p className="font-small blue-text d-flex justify-content-end pb-3">
                                    <a href="#!" className="blue-text ml-1">
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </p>
                                <div className="text-center mb-3">
                                    <MDBBtn
                                        type="button"
                                        gradient="blue"
                                        rounded
                                        className="btn-block z-depth-1a"
                                    >
                                        Pa' Entro!
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    ¿No eres miembro?
                                    <a href="#!" className="blue-text ml-1">
                                        Registrate
                                    </a>
                                </p>
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};