import React from "react";
import "./landing.component.css";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import yacoLogo from "../../../public/assets/images/Isotipo_YACO.svg";
import LogoYaco from "../../commons/logo-yaco.component";

const LandingComponent = () => {
  //TODO -> solve not load images, alternative for the moment appear the alt value on images
  //TODO -> move assets to public folder
  return (
    <div>
      <div className="grid">
        <div className="col">
          <div className="card-container flex align-items-center justify-content-between">
            <Image src={yacoLogo} alt="Logo YACO" width="150" />
            <div className="card-container size-container-buttons flex align-items-center justify-content-evenly">
              <Button
                label="Ingresar"
                className="p-button-raised p-button-text color-green-YACO"
              />
              <Button
                label="Registrarse"
                className="p-button-raised background-green-YACO"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col-6">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="col-6">
          <LogoYaco/>
          {/*<Image src={yacoLogo} alt="Logo YACO" />*/}
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
