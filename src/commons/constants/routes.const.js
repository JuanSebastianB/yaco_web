import HomeComponent from '../../sections/home/home.component';
import LandingComponent from '../../sections/landing/landing.component';
import LoginComponent from '../../sections/login/login.component';
import RegisterComponent from '../../sections/register/register.component';
import SitesComponent from '../../sections/sites/sites.component';
import {
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  SITES_PATH,
} from './paths.const';

export const routesConst = [
  { path: '/', component: LandingComponent },
  { path: SITES_PATH, component: SitesComponent },
  { path: LOGIN_PATH, component: LoginComponent },
  { path: REGISTER_PATH, component: RegisterComponent },
  { path: HOME_PATH, component: HomeComponent },
];
