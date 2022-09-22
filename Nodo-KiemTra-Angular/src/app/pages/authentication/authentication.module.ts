import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { DangerMessageComponent } from './danger-message/danger-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    LockscreenComponent,
    UnderConstructionComponent,
    Error404Component,
    Error500Component,
    SuccessMessageComponent,
    DangerMessageComponent,
    WarningMessageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AuthenticationModule { }
