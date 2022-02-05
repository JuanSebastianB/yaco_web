import React from 'react';
import './HeaderWelcome.Component.css';
import { HeaderWelcomeLabels } from './HeaderWelcome.Labels';
import logoImage from '../../../assets/images/Isotipo_YACO.svg';
import { LOGIN_PATH, REGISTER_PATH } from '../../../commons/constants/paths.const';

export const HeaderWelcomeComponent = () => {
  return (<div className="p-grid p-justify-between space-padding-right-header">
    <div className="p-col-2">
      <img src={logoImage} className='img-fluid size-logo-yaco-home pointer-cursor' alt='logo YACO'/>
    </div>
    <div className="p-col-4">
      <div className="p-grid p-justify-between">
        <a href={REGISTER_PATH} className='header-item-option'>{HeaderWelcomeLabels.wantPublish}</a>
        <a href={REGISTER_PATH} className='header-item-option'>{HeaderWelcomeLabels.register}</a>
        <a href={LOGIN_PATH} className='header-item-option'>{HeaderWelcomeLabels.login}</a>
      </div>
    </div>
  </div>);
};
