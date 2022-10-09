import React from 'react';
import './login.component.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoYaco from '../../commons/logo-yaco.component';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { HOME_PATH, REGISTER_PATH } from '../../commons/constants/paths.const';

const LoginComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <React.Fragment>
      <div className="grid">
        <div className="col center-item">
          <div className={'size-logo-login'}>
            <LogoYaco />
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col center-item">
          <div className="card">
            <div className="field space-input-login">
              <span className="p-float-label p-input-icon-right">
                <InputText
                  id="input-identificator"
                  value={user}
                  onChange={(event) => setUser(event.target.value)}
                />
                <label htmlFor="input-identificator">
                  <i className="pi pi-user" /> Usuario o correo
                </label>
              </span>
            </div>
            <div className="field space-input-login">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-eye" />
                <InputText
                  id="input-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <label htmlFor="input-password">
                  <i className="pi pi-lock" /> Contraseña
                </label>
              </span>
            </div>
            <div className={'center-text space-input-login'}>
              <Button
                label="Ingresar"
                onClick={() => navigate(HOME_PATH)}
                className="p-button-rounded p-button-success background-main-YACO"
              />
            </div>
            <div className={'center-text'}>
              <span className="link-text-style cursor-pointer">
                Olvide mi contraseña
              </span>
            </div>
            <div className={'center-text space-input-login'}>
              <span
                className="link-text-style cursor-pointer"
                onClick={() => navigate(REGISTER_PATH)}
              >
                Registrarme
              </span>
            </div>
            <div className={'center-text space-input-login'}>
              <span>O ingresa con:</span>
            </div>
            <div className={'center-text'}>
              <i className="pi pi-facebook size-icon-login cursor-pointer" />
              <i className="pi pi-google size-icon-login cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginComponent;
