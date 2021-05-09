import { INPUT_TEXT_COMPONENT } from '../../../commons/components/field-factory/FieldFactory.Labels';
import { LoginLabels, loginFormName } from '../Login.Labels';

const INPUT_FIELD_NICKNAME = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: LoginLabels.yourNick,
    placeholder: '',
    name: loginFormName.nickName,
    value: ''
  }
};

const INPUT_FIELD_PASSWORD = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: LoginLabels.yourPassword,
    placeholder: '',
    name: loginFormName.passwordName,
    type: 'password'
  }
};

export const LOGIN_FORM_DESCRIPTORS = [
  INPUT_FIELD_NICKNAME,
  INPUT_FIELD_PASSWORD
];
