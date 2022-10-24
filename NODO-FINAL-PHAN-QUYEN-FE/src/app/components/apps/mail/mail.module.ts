import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { ViewMailComponent } from './view-mail/view-mail.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MailInboxComponent,
    ViewMailComponent,
    MailComposeComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class MailModule { }
