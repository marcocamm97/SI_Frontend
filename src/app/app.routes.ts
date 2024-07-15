import { Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import {RecoveryComponent} from "./recovery/recovery.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {  path: 'recovery', component: RecoveryComponent  }
];
