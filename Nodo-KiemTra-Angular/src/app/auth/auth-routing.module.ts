import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {LoginComponent} from './login/login.component';
import {ResisterComponent} from './resister/resister.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: ResisterComponent},
    {path: 'forgot-password', component: ForgetPasswordComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
