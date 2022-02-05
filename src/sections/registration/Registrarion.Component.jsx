import React, { useEffect } from "react";
import "./Registrarion.Component.css";
import { RegistrationLabels } from "./RegistrationLabels";
import { useHistory } from "react-router-dom";
import { addToHistory } from "../../commons/utils/utils-routing";
import { LOGIN_PATH } from "../../commons/constants/paths.const";
import facebookIcon from "../../assets/icons/facebook.png";
import gmailIcon from "../../assets/icons/gmail.png";
import useFormField from "../../commons/components/hooks/useFormField.hook";
import FieldFactoryComponent from "../../commons/components/field-factory/FieldFactory.Component";
import { REGISTRATION_FORM_DESCRIPTOR } from "./descriptor/descriptor";

export const RegistrationComponent = () => {
  const history = useHistory();
  const [
    registrationFormHook,
    bindRegistrationFormHook,
    setRegistrationFormHook,
  ] = useFormField(RegistrationLabels.discriminatorRegistrationName, {});

  useEffect(() => {}, [registrationFormHook]);

  return (
    <div className={"color-green-background size-background"}>
      <div>
        <div>
          <div className={"center-div"}>
            <div>
              <div className={"center-content"}>
                <i className="fas fa-door-open color-white-text size-ground" />
              </div>
              <div className={"center-content"}>
                <h1 className={"color-white-text"}>
                  {RegistrationLabels.welcomeYACO}
                </h1>
              </div>
              <div className={"center-content"}>
                <h4 className={"color-white-text"}>
                  {RegistrationLabels.accountAlready}
                </h4>
              </div>
              <div className={"center-content"}>
                <button
                  className={"button-style-login"}
                  onClick={() => addToHistory(history, LOGIN_PATH)}
                >
                  {RegistrationLabels.login}
                </button>
              </div>
            </div>
          </div>
          <div className={"background-form"}>
            <div>
              {REGISTRATION_FORM_DESCRIPTOR.map((descriptor, index) => (
                <div
                  key={`${RegistrationLabels.idFieldRegistrationName}-${descriptor.properties.name}-${index}`}
                >
                  <FieldFactoryComponent
                    {...descriptor}
                    bind={bindRegistrationFormHook}
                  />
                </div>
              ))}
            </div>
            <div className={"top-space-register-social"}>
              <div>
                <div className={"box-line-or"} />
              </div>
              <div className="text-center">
                <h5>{RegistrationLabels.orWord}</h5>
              </div>
              <div>
                <div className={"box-line-or"} />
              </div>
            </div>
            <div className={"top-space-register-social"}>
              <div />
              <div className={"text-center"}>
                <img
                  src={facebookIcon}
                  className="icon-social"
                  alt="aligment"
                />
              </div>
              <div className="text-center">
                <img src={gmailIcon} className="icon-social" alt="aligment" />
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
