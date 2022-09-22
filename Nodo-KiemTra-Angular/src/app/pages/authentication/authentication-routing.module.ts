import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangerMessageComponent } from './danger-message/danger-message.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error-404',
        component: Error404Component
      },
      {
        path: 'error-500',
        component: Error500Component
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'lockscreen',
        component: LockscreenComponent
      },
      {
        path: 'under-construction',
        component: UnderConstructionComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'success-message', 
        component: SuccessMessageComponent
      },
      {
        path: 'danger-message', 
        component: DangerMessageComponent
      },
      {
        path: 'warning-message', 
        component: WarningMessageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
