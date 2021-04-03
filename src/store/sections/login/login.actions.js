import {encryptMessage} from '../../../commons/utils/tripleDes';
import {postLoginService} from '../../../services/login/login.service';

export const VALIDATION_STATUS_LOGIN = 'VALIDATION_STATUS_LOGIN';

export const doLoginAction = (credentials = {}) => dispatch => {
  return postLoginService({
    ...credentials, pass: encryptMessage(credentials.pass).toString()
  }).then((response) => dispatch(doLoginAsync(response.data || false))).catch((error) => alert(error));
};

export const doLoginAsync = (statusValidationLogin = false) => {
  return {type: VALIDATION_STATUS_LOGIN, value: statusValidationLogin};
};