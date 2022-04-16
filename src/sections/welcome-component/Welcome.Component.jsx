import React from "react";
import "./Welcome.Component.css";
import { HeaderWelcomeComponent } from "./header-page/HeaderWelcome.Component";
import { BodyWelcomeComponent } from "./body-page/BodyWelcome.Component";
import { FooterWelcomeComponent } from "./footer-page/FooterWelcome.Component";

const WelcomeComponent = () => {
  return (
    <div className={"space-margin-sides-layout-yaco"}>
      <h1>Hola</h1>
      <HeaderWelcomeComponent />
      <BodyWelcomeComponent />
      <FooterWelcomeComponent />
    </div>
  );
};

export default WelcomeComponent;
