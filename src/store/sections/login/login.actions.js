import { requestLogin } from '../../../services/login.service';

export const doLoginAction =
  (user = '', password = '') =>
  (dispatch) => {
    requestLogin({ user, password })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
