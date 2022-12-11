import React from 'react';
import './landing.component.css';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import yacoLogoSVG from '../../../public/assets/images/Isotipo_YACO.svg';
import yacoImagotipePNG from '../../../public/assets/images/imagotipo_transparency.png';
import LogoYaco from '../../commons/logo-yaco.component';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { useNavigate } from 'react-router-dom';
import {
  LOGIN_PATH,
  REGISTER_PATH,
  SITES_PATH,
} from '../../commons/constants/paths.const';

const myStyles = {
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const LandingComponent = () => {
  const navigate = useNavigate();
  //TODO -> solve not load images, alternative for the moment appear the alt value on images
  //TODO -> move assets to public folder
  return (
    <React.Fragment>
      <div className="grid">
        <div className="col">
          <div className="card-container flex align-items-center justify-content-between">
            <Image src={yacoLogoSVG} alt="Logo YACO" width="100" />
            <div className="card-container size-container-buttons flex align-items-center justify-content-evenly">
              <Button
                label="Registrarse hola"
                className="p-button-raised p-button-text color-main-YACO"
                onClick={() => navigate(REGISTER_PATH)}
              />
              <Button
                label="Ingresar"
                className="p-button-raised background-main-YACO"
                onClick={() => navigate(LOGIN_PATH)}
              />
            </div>
          </div>
        </div>
      </div>
      <StyleRoot>
        <div className="grid">
          <div className="col-6 center-vertical-text">
            <h1
              className={'font-ole-google center-text'}
              style={myStyles.fadeIn}
            >
              Anímese a conocer la tierrita sumercé!
            </h1>
          </div>
          <div className="col-6" style={myStyles.fadeIn}>
            <LogoYaco/>
          </div>
        </div>
      </StyleRoot>
      <div className="grid">
        <div className="col background-main-YACO">
          <h3
            className={'text-catch-style cursor-pointer'}
            onClick={() => navigate(SITES_PATH)}
          >
            Encuentra lugares increibles!
          </h3>
        </div>
      </div>
      <div className={'top-space'}>
        <div className="grid">
          <div className="col-6">
            <h1 className={'font-ole-google center-text'}>Pa' que se anime</h1>
          </div>
          <div className="col-6">
            <p
              className={'font-indie-google space-sides-text add-space-right'}
              style={myStyles.fadeIn}
            >
              Los mejores lugares y eventos donde pasar unos momentos mágicos
              estan a tu disposición, solo necesitas conocerlos y ayudar a otras
              personas a que lo conozcan. Date la oportuniad de crear los
              mejores recuerdos y conocer la tierrita.
            </p>
          </div>
        </div>
      </div>
      <div className={'top-space'}>
        <div className="grid">
          <div className="col-4 center-text">
            <i className="pi pi-search size-icon-landing" />
            <h2>Busca</h2>
          </div>
          <div className="col-4 center-text">
            <i className="pi pi-plus-circle size-icon-landing" />
            <h2>Publica</h2>
          </div>
          <div className="col-4 center-text">
            <i className="pi pi-map-marker size-icon-landing" />
            <h2>Conoce</h2>
          </div>
        </div>
      </div>
      <div className={'top-space'}>
        <div className="grid">
          <div className="col background-contrast-YACO">
            <div className="grid">
              <div className="col-4 center-text">
                <Image src={yacoImagotipePNG} alt="Logo YACO" width="250" />
              </div>
              <div className="col-4 font-noto-google center-vertical-text">
                <div>
                  <div>
                    <strong>Teléfono: </strong>304 531 48 34
                  </div>
                  <div>
                    <strong>E-mail: </strong>contactanos@yaco.com
                  </div>
                  <div>
                    <i className="pi pi-facebook size-icon-footer cursor-pointer" />
                    <i className="pi pi-twitter size-icon-footer cursor-pointer" />
                    <i className="pi pi-instagram size-icon-footer cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingComponent;
