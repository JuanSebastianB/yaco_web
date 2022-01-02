import {
  INPUT_DATE_COMPONENT,
  INPUT_TEXT_COMPONENT
} from '../../../commons/components/field-factory/FieldFactory.Labels';
import { RegistrationFormNames, RegistrationLabels } from '../RegistrationLabels';

const INPUT_FIELD_PERSON_NAME = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourName,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_LAST_NAME = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourLastName,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_DOCUMENT_TYPE = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourName,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_DOCUMENT_NUMBER = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourName,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_BIRTHDATE = {
  type: INPUT_DATE_COMPONENT,
  properties: {
    label: RegistrationLabels.yourBirthdate,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: new Date()
  }
};

const INPUT_FIELD_PERSON_PHONE = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourName,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_VALIDATE_PHONE = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourName,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_EMAIL = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourEmail,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_VALIDATE_EMAIL = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.validateEmail,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_NICKNAME = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourNickname,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

const INPUT_FIELD_PERSON_PASSWORD = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourPassword,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    type: 'password',
    value: ''
  }
};

const INPUT_FIELD_PERSON_VALIDATE_PASSWORD = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.validatePassword,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    type: 'password',
    value: ''
  }
};

const INPUT_FIELD_PERSON_ROL = {
  type: INPUT_TEXT_COMPONENT,
  properties: {
    label: RegistrationLabels.yourName,
    placeholder: '',
    name: RegistrationFormNames.inputName,
    value: ''
  }
};

export const REGISTRATION_FORM_DESCRIPTOR = [
];