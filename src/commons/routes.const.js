import {WelcomeComponent} from '../sections/welcome-component/Welcome.Component';
import {LoginComponent} from '../sections/login/Login.Component';
import {HOME_PATH, LOGIN_PATH} from './paths.const';

export const routesConst = [
    {path: '/', component: WelcomeComponent},
    {path: `${HOME_PATH}`, component: WelcomeComponent},
    {path: `${LOGIN_PATH}`, component: LoginComponent}
];