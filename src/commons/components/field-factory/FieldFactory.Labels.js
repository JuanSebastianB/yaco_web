import { MDBInput } from 'mdbreact';

export const INPUT_TEXT_COMPONENT = 'INPUT_TEXT_COMPONENT';

export const COMPONENT_TYPES = [INPUT_TEXT_COMPONENT];

export const COMPONENTS = {
  [INPUT_TEXT_COMPONENT]: {
    component: MDBInput, requireChildren: false
  }
};
