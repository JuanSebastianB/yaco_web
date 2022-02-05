import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SideMenu.Component.css";
import { addToHistory } from "../../../commons/utils/utils-routing";
import { LOGIN_PATH } from "../../../commons/constants/paths.const";
import { MainPageComponent } from "../main-page/MainPage.Component";
import { MySitesComponent } from "../../sites/my-sites/MySites.Component";
import { ConfigurationComponent } from "../Configuration.Component";
import { SideMenuLabels } from "./SideMenu.Labels";
import { useDispatch } from "react-redux";
import { doLoginAsync } from "../../../store/sections/login/login.actions";

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
  const history = useHistory();
  const dispatch = useDispatch();
  const [componentSelected, setComponentSelected] = useState(
    <MainPageComponent />
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickOnMenuOpen, setClickOnMenuOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(0);

  return (
    <div className={"flex-container"}>
      <div
        className={`sticky-side-menu ${
          isMenuOpen ? "side-bar side-bar-show" : "side-bar side-bar-hide"
        }`}
      >
        <div className={"profile-space"}>
          {clickOnMenuOpen && (
            <div>
              <div>
                <div>
                  <div>
                    <img src="" />
                  </div>
                </div>
                <div>
                  <div>
                    <p>Juan Sebastian Becerra</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {itemsMenu.map((item, index) => (
          <div className={"flex-container"} key={index}>
            <link
              to="#"
              className={`flex-container ${
                itemSelected === index ? "item-active" : "item-menu-style"
              }
                            ${
                              item.isConfiguration ? "configuration-item" : ""
                            }`}
              onClick={() => {
                setComponentSelected(item.component);
                setItemSelected(index);
              }}
            >
              {item.icon}
              {clickOnMenuOpen && (
                <div type={isMenuOpen ? "fadeInLeft" : "fadeOutLeft"}>
                  {" "}
                  {item.label}
                </div>
              )}
            </link>
            {itemSelected === index ? (
              <div
                className={`selector-menu-box ${
                  item.isConfiguration ? "configuration-item" : ""
                }`}
              >
                <div className={"selector-menu-option"}>
                  <i
                    className="fas fa-bars"
                    onClick={() => {
                      setClickOnMenuOpen(true);
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  />
                </div>
              </div>
            ) : (
              <span />
            )}
          </div>
        ))}
        <link
          to="#"
          className={"flex-container item-menu-style"}
          onClick={() => {
            addToHistory(history, LOGIN_PATH);
            dispatch(doLoginAsync());
          }}
        >
          <i className="fas fa-sign-out-alt" />
          {clickOnMenuOpen && <div> {"Ta Luego"}</div>}
        </link>
      </div>
      <div className={"main-container-full"}>{componentSelected}</div>
    </div>
  );
};
