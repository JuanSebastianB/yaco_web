import {VALIDATION_STATUS_LOGIN} from './login.actions';

const initialState = {
  validationStatus: false
};

const loginReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case VALIDATION_STATUS_LOGIN:
      return {...state, validationStatus: action.value};
    default:
      return state;
  }
};

export default loginReducers;