import React from 'react';
import './Login.Component.css';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBModalFooter, MDBRow} from 'mdbreact';
import isotipoYACO from '../../assets/images/Isotipo_YACO.png'
import {addToHistory} from "../../commons/utils/utils-routing";
import {HOME_PATH, REGISTER_PATH, WELCOME_PATH} from "../../commons/constants/paths.const";
import {useHistory} from 'react-router-dom';
import {LoginLabels} from './Login.Labels';

export const LoginComponent = () => {
    const history = useHistory();
    return (
        <div className="bg">
            <div className={'div-card'}>
                <MDBContainer className='top-space'>
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="text-center">Siga más pa' entro!</h5>
                            <img
                                src={isotipoYACO}
                                className="img-fluid rounded-circle logo-style"
                                onClick={() => addToHistory(history, WELCOME_PATH)}
                                alt="Ir a incio"
                            />
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBCard>
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
                                        <a href="#!" className="ml-1 color-green">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </p>
                                    <div className="text-center mb-3">
                                        <MDBBtn
                                            type="button"
                                            onClick={() => addToHistory(history, HOME_PATH)}
                                            className="btn-block z-depth-1a button-login-style">
                                            {LoginLabels.loginButton}
                                        </MDBBtn>
                                    </div>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        ¿No eres miembro?
                                        <a href="#!" className="ml-1 color-green"
                                           onClick={() => addToHistory(history, REGISTER_PATH)}>
                                            Registrate
                                        </a>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
};