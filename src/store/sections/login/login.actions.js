import { encryptMessage } from '../../../commons/utils/tripleDes';
import { postLoginService } from '../../../services/login/login.service';
import { loginFormName } from '../../../sections/login/Login.Labels';

export const VALIDATION_STATUS_LOGIN = 'VALIDATION_STATUS_LOGIN';

/**
 * need to validate user, before to de the request need to encrypt password
 * @param credentials
 * @returns {function(*): Promise<AxiosResponse<any> | void>}
 */
export const doLoginAction = (credentials = {}) => dispatch => {
  return postLoginService({
    ...credentials, [loginFormName.passwordName]: encryptMessage(credentials[loginFormName.passwordName]).toString()
  }).then((response) => dispatch(doLoginAsync(response.data || false))).catch((error) => alert(error));
};

export const doLoginAsync = (statusValidationLogin = false) => {
  return { type: VALIDATION_STATUS_LOGIN, value: statusValidationLogin };
};
