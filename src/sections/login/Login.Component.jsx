import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.Component.css';
import isotipoYACO from '../../assets/images/Isotipo_YACO.svg';
import { addToHistory } from '../../commons/utils/utils-routing';
import { HOME_PATH, REGISTER_PATH } from '../../commons/constants/paths.const';
import { useHistory } from 'react-router-dom';
import { LoginLabels } from './Login.Labels';
import { doLoginAction } from '../../store/sections/login/login.actions';
import { LOGIN_FORM_DESCRIPTORS } from './descriptor/descriptor';
import useFormField from '../../commons/components/hooks/useFormField.hook';
import FieldFactoryComponent from '../../commons/components/field-factory/FieldFactory.Component';

export const LoginComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const validationStatus = useSelector(state => state.loginReducers.validationStatus);
  const [loginFormHook, bindLoginFormHook, setLoginFormHook] = useFormField(LoginLabels.loginFormDiscriminator, {});

  useEffect(() => {
    validationStatus && addToHistory(history, HOME_PATH);
  }, [validationStatus]);

  return (<div className={'background-wave-bottom-yaco'}>
    <div className='space-container-login-screen'>
      <div>
        <div>
          <h5 className='text-center'>Siga más pa entro!</h5>
          <img src={isotipoYACO} className='img-fluid rounded-circle logo-style' alt='Ir a incio'
          />
        </div>
        <div>
          <div className={'back-color-transparent'}>
            <div className='mx-4'>
              <div className='text-center'>
                <h3 className='dark-grey-text mb-5'>
                  <strong>{LoginLabels.login}</strong>
                </h3>
              </div>
              {LOGIN_FORM_DESCRIPTORS.map((descriptor, index) =>
                <FieldFactoryComponent key={index} {...descriptor} bind={bindLoginFormHook}/>)}
              <p className='font-small d-flex justify-content-end pb-3'>
                <a href='#' className='ml-1 color-green color-text-green-yaco'>
                  {LoginLabels.forgotPassword}
                </a>
              </p>
              <div className='text-center mb-3'>
                <button type='button' onClick={() => dispatch(doLoginAction(loginFormHook))}
                        className='btn-block z-depth-1a button-login-style'>
                  {LoginLabels.loginButton}
                </button>
              </div>
            </div>
            <div className='mx-5 pt-3 mb-1'>
              <p className='font-small grey-text d-flex justify-content-end'>
                <a href='#' className='ml-1 color-text-green-yaco' onClick={() => addToHistory(history, REGISTER_PATH)}>
                  {LoginLabels.registerOption}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};
