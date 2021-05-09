import React, { useState } from 'react';
import './Registrarion.Component.css';
import { RegistrarionLabels } from './Registrarion.Labels';
import { MDBCol, MDBContainer, MDBFormInline, MDBInput, MDBRow } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import { addToHistory } from '../../commons/utils/utils-routing';
import { HOME_PATH, LOGIN_PATH } from '../../commons/constants/paths.const';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import facebookIcon from '../../assets/icons/facebook.png';
import gmailIcon from '../../assets/icons/gmail.png';

export const RegistrationComponent = () => {
  const history = useHistory();
  const [selectedDay, setSelectedDay] = useState(null);
  return (<div className={'color-green-background size-background'}>
      <MDBContainer fluid={true}>
        <MDBRow>
          <MDBCol sm='4' md='4' lg='4' xl='4' className={'center-div'}>
            <div>
              <MDBRow className={'center-content'}>
                <i className='fas fa-door-open color-white-text size-ground'/>
              </MDBRow>
              <MDBRow className={'center-content'}>
                <h1 className={'color-white-text'}>{RegistrarionLabels.welcomeYACO}</h1>
              </MDBRow>
              <MDBRow className={'center-content'}>
                <h4 className={'color-white-text'}>{RegistrarionLabels.accountAlready}</h4>
              </MDBRow>
              <MDBRow className={'center-content'}>
                <button className={'button-style-login'}
                        onClick={() => addToHistory(history, LOGIN_PATH)}>{RegistrarionLabels.login}
                </button>
              </MDBRow>
            </div>
          </MDBCol>
          <MDBCol size='xs' xs='12' sm='8' md='8' lg='8' xl='8' className={'background-form'}>
            <MDBRow>
              <MDBCol>
                <form>
                  <p className='h5 text-center mb-4'>{RegistrarionLabels.yourData}</p>
                  <MDBRow className={'top-space-row-form'}>
                    <MDBCol>
                      <MDBFormInline>
                        <i className='far fa-user'/>
                        <MDBInput label={RegistrarionLabels.yourName} group type='text' validate
                                  error='wrong'
                                  success='right'/>
                      </MDBFormInline>
                    </MDBCol>
                    <MDBCol>
                      <MDBFormInline>
                        <i className='fas fa-user'/>
                        <MDBInput label={RegistrarionLabels.yourLastName} group type='text'
                                  validate
                                  error='wrong'
                                  success='right'/>
                      </MDBFormInline>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className={'top-space-row-form'}>
                    <MDBCol>
                      <span><strong>{RegistrarionLabels.yourBithdate}</strong></span>
                      <div className={'vertical-center'}>
                        <DatePicker
                          value={selectedDay}
                          onChange={setSelectedDay}
                          inputPlaceholder='Select a day'
                          shouldHighlightWeekends
                        />
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <MDBFormInline>
                        <i className='fab fa-odnoklassniki'/>
                        <MDBInput label={RegistrarionLabels.yourNickname} group type='text'
                                  validate
                                  error='wrong'
                                  success='right'/>
                      </MDBFormInline>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className={'top-space-row-form'}>
                    <MDBCol>
                      <MDBFormInline>
                        <i className='far fa-envelope'/>
                        <MDBInput label={RegistrarionLabels.yourEmail} group type='text'
                                  validate
                                  error='wrong'
                                  success='right'/>
                      </MDBFormInline>
                    </MDBCol>
                    <MDBCol>
                      <MDBFormInline>
                        <i className='fas fa-envelope'/>
                        <MDBInput label={RegistrarionLabels.validateEmail} group type='text'
                                  validate
                                  error='wrong'
                                  success='right'/>
                      </MDBFormInline>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className={'top-space-row-form'}>
                    <MDBCol>
                      <MDBFormInline>
                        <i className='fas fa-unlock'/>
                        <MDBInput label={RegistrarionLabels.yourPassword} group type='text'
                                  validate
                                  error='wrong'
                                  success='right'/>
                      </MDBFormInline>
                    </MDBCol>
                    <MDBCol>
                      <MDBFormInline>
                        <i className='fas fa-lock'/>
                        <MDBInput label={RegistrarionLabels.validatePassword} group type='text'
                                  validate
                                  error='wrong'
                                  success='right'/>
                      </MDBFormInline>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className='text-center'>
                      <button className={'button-style-register'}
                              onClick={() => addToHistory(history, HOME_PATH)}>{RegistrarionLabels.register}</button>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCol>
            </MDBRow>
            <MDBRow className={'top-space-register-social'}>
              <MDBCol xs={5} sm={5} md={5} xl={5} lg={5}>
                <div className={'box-line-or'}/>
              </MDBCol>
              <MDBCol className='text-center'>
                <h5>{RegistrarionLabels.registerWith}</h5>
              </MDBCol>
              <MDBCol xs={5} sm={5} md={5} xl={5} lg={5}>
                <div className={'box-line-or'}/>
              </MDBCol>
            </MDBRow>
            <MDBRow className={'top-space-register-social'}>
              <MDBCol/>
              <MDBCol className={'text-center'}>
                <img src={facebookIcon} className='icon-social' alt='aligment'/>
              </MDBCol>
              <MDBCol className='text-center'>
                <img src={gmailIcon} className='icon-social' alt='aligment'/>
              </MDBCol>
              <MDBCol/>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>);
};