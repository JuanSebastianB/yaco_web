import React from 'react';

export const INPUT_TEXT_COMPONENT = 'INPUT_TEXT_COMPONENT';
export const INPUT_DATE_COMPONENT = 'INPUT_DATE_COMPONENT';

export const COMPONENT_TYPES = [INPUT_TEXT_COMPONENT, INPUT_DATE_COMPONENT];

export const COMPONENTS = {
  [INPUT_TEXT_COMPONENT]: {
    component: <h3>Input</h3>, requireChildren: false
  }, [INPUT_DATE_COMPONENT]: {
    component: <h3>Date</h3>, requireChildren: false
  }
};
