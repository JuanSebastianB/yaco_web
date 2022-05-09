import React from "react";
import "./landing.component.css";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

const LandingComponent = () => {
  //TODO -> solve not load images, alternative for the moment appear the alt value on images
  //TODO -> move assets to public folder
  return (
    <div className="card-container flex align-items-center justify-content-between">
      <Image src="../../assets/images/Isotipo_YACO.svg" alt="Logo YACO" />
      <div className="card-container size-container-buttons flex align-items-center justify-content-evenly">
        <Button label="Success" className="p-button-success p-button-text" />
        <Button label="Entrar" />
      </div>
    </div>
  );
};

export default LandingComponent;
