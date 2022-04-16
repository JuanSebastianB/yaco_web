import React from "react";
import "./SideMenu.Component.css";
import { MainPageComponent } from "../main-page/MainPage.Component";
import { MySitesComponent } from "../../sites/my-sites/MySites.Component";
import { ConfigurationComponent } from "../Configuration.Component";
import { SideMenuLabels } from "./SideMenu.Labels";

const itemsMenu = [
  {
    label: SideMenuLabels.main,
    icon: <i className="fas fa-home" />,
    component: <MainPageComponent />,
    isConfiguration: false,
  },
  {
    label: SideMenuLabels.yourSites,
    icon: <i className="fas fa-route" />,
    component: <MySitesComponent />,
    isConfiguration: false,
  },
  {
    label: SideMenuLabels.configuration,
    icon: <i className="fas fa-tools" />,
    component: <ConfigurationComponent />,
    isConfiguration: true,
  },
];

export const SideMenuComponent = () => {
  return <div>Home</div>;
};
