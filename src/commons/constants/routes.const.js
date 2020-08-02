import {HOME_PATH, LOGIN_PATH, REGISTER_PATH, WELCOME_PATH} from './paths.const';
import {WelcomeComponent} from '../../sections/welcome-component/Welcome.Component';
import {LoginComponent} from '../../sections/login/Login.Component';
import {RegistrationComponent} from '../../sections/registration/Registrarion.Component';
import {HomeComponent} from '../../sections/home/Home.Component';

export const routesConst = [
    {path: '/', component: WelcomeComponent},
    {path: `${WELCOME_PATH}`, component: WelcomeComponent},
    {path: `${LOGIN_PATH}`, component: LoginComponent},
    {path: `${REGISTER_PATH}`, component: RegistrationComponent},
    {path: `${HOME_PATH}`, component: HomeComponent}
];