import React from 'react';
import './Registrarion.Component.css';
import {MDBCol, MDBContainer, MDBFormInline, MDBInput, MDBRow} from 'mdbreact';
import {useHistory} from 'react-router-dom';
import {addToHistory} from '../../commons/utils/utils-routing';
import {HOME_PATH, LOGIN_PATH} from '../../commons/constants/paths.const';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';

export const RegistrationComponent = () => {
    const history = useHistory();
    return (
        <div className={'color-green-background size-background'}>
            <MDBContainer fluid={true}>
                <MDBRow>
                    <MDBCol sm="4" md="4" lg="4" xl="4" className={'center-div'}>
                        <div>
                            <MDBRow className={'center-content'}>
                                <i className="fas fa-door-open color-white-text size-ground"/>
                            </MDBRow>
                            <MDBRow className={'center-content'}>
                                <h1 className={'color-white-text'}>Bienvenido a YACO</h1>
                            </MDBRow>
                            <MDBRow className={'center-content'}>
                                <h4 className={'color-white-text'}>Si ya tienes cuenta, por favor</h4>
                            </MDBRow>
                            <MDBRow className={'center-content'}>
                                <button className={'button-style-login'}
                                        onClick={() => addToHistory(history, LOGIN_PATH)}>Ingresa
                                </button>
                            </MDBRow>
                        </div>
                    </MDBCol>
                    <MDBCol size="xs" xs="12" sm="8" md="8" lg="8" xl="8" className={'background-form'}>
                        <form>
                            <p className="h5 text-center mb-4">Tus datos, tamos en confianza</p>
                            <MDBRow>
                                <MDBCol xs={'4'} sm={'4'} md={'4'} lg={'4'} xl={'4'}>
                                    <p className="text-left">Eres: </p>
                                </MDBCol>
                                <MDBCol xs={'8'} sm={'8'} md={'8'} lg={'8'} xl={'8'}>
                                    <MDBFormInline>
                                        <MDBInput
                                            gap
                                            onClick={() => {
                                            }}
                                            checked={true}
                                            label='Anfitrión'
                                            type='radio'
                                            id='radio1'
                                            containerClass='mr-5'
                                        />
                                        <MDBInput
                                            gap
                                            onClick={() => {
                                            }}
                                            checked={false}
                                            label='Visitante'
                                            type='radio'
                                            id='radio2'
                                            containerClass='mr-5'
                                        />
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'top-space-row-form'}>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="far fa-user"/>
                                        <MDBInput label="Tu(s) nombre(s)" group type="text" validate error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="fas fa-user"/>
                                        <MDBInput label="Tu(s) apellido(s)" group type="text" validate
                                                  error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'top-space-row-form'}>
                                <MDBCol>
                                    <span><strong>Tú tipo de documento</strong></span>
                                    <div className={'vertical-center'}>
                                        <select className="browser-default custom-select">
                                            <option selected disabled>Selecciona...</option>
                                            <option value="1">CC</option>
                                            <option value="2">CE</option>
                                            <option value="3">Pasaporte</option>
                                        </select>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="far fa-file"/>
                                        <MDBInput label="Tu número de documento" group type="text" validate
                                                  error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'top-space-row-form'}>
                                <MDBCol>
                                    <span><strong>Tú genero</strong></span>
                                    <div className={'vertical-center'}>
                                        <select className="browser-default custom-select">
                                            <option selected disabled>Selecciona...</option>
                                            <option value="1">Masculino</option>
                                            <option value="2">Femenino</option>
                                            <option value="3">Otro</option>
                                        </select>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="fas fa-phone-alt"/>
                                        <MDBInput label="Tu teléfono" group type="text" validate error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'top-space-row-form'}>
                                <MDBCol>
                                    <span><strong>Tu fecha de nacimiento</strong></span>
                                    <div className={'vertical-center'}>
                                        <DayPickerInput/>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="fab fa-odnoklassniki"/>
                                        <MDBInput label="Tu usuario" group type="text" validate error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'top-space-row-form'}>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="far fa-envelope"/>
                                        <MDBInput label="Tu Correo Electónico" group type="text" validate error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="fas fa-envelope"/>
                                        <MDBInput label="Confirmar Correo" group type="text" validate error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'top-space-row-form'}>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="fas fa-unlock"/>
                                        <MDBInput label="Tu Contraseña" group type="text" validate error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                                <MDBCol>
                                    <MDBFormInline>
                                        <i className="fas fa-lock"/>
                                        <MDBInput label="Confirmar contraseña" group type="text" validate error="wrong"
                                                  success="right"/>
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBRow>
                            <div className="text-center">
                                <button className={'button-style-register'} onClick={() => addToHistory(history, HOME_PATH)}>Registrarme</button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};