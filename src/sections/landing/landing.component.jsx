import React from "react";
import "./landing.component.css";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import yacoLogoSVG from "../../../public/assets/images/Isotipo_YACO.svg";
import yacoImagotipePNG from "../../../public/assets/images/imagotipo_transparency.png";
import LogoYaco from "../../commons/logo-yaco.component";

const LandingComponent = () => {
  //TODO -> solve not load images, alternative for the moment appear the alt value on images
  //TODO -> move assets to public folder
  return (
    <React.Fragment>
      <div className="grid">
        <div className="col">
          <div className="card-container flex align-items-center justify-content-between">
            <Image src={yacoLogoSVG} alt="Logo YACO" width="150" />
            <div className="card-container size-container-buttons flex align-items-center justify-content-evenly">
              <Button
                label="Registrarse"
                className="p-button-raised p-button-text color-main-YACO"
              />
              <Button
                label="Ingresar"
                className="p-button-raised background-main-YACO"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col-6 center-vertical-text">
          <p className={"space-sides-text"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </p>
        </div>
        <div className="col-6">
          <LogoYaco />
        </div>
      </div>
      <div className="grid">
        <div className="col background-main-YACO">
          <h3 className={'text-catch-style cursor-pointer'}>Encuentra lugares increibles!</h3>
        </div>
      </div>
      <div className="grid">
        <div className="col background-contrast-YACO">
          <Image src={yacoImagotipePNG} alt="Logo YACO" width="250" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingComponent;
