import {encryptMessage} from '../../../commons/utils/tripleDes';
import {postLoginService} from '../../../services/login/login.service';

export const doLoginAction = (credentials = {}) => dispatch => {
  return postLoginService({
    ...credentials, pass: encryptMessage(credentials.password).toString()
  }).then((response) => alert(response)).catch((error) => alert(error));
};