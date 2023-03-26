import { requestLogin } from '../../../services/login.service';
import {HOME_PATH} from "../../../commons/constants/paths.const";

export const doLoginAction =
  (user = '', password = '', navigate = () => {}) =>
  (dispatch) => {
    requestLogin({ user, password })
      .then(() => navigate(HOME_PATH))
      .catch((error) => console.error(error));
  };
