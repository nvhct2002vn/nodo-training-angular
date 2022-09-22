import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { BlogModule } from './blog/blog.module';
import { FilemanagerModule } from './filemanager/filemanager.module';
import { MapsModule } from './maps/maps.module';
import { MailModule } from './mail/mail.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';


@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    MailModule,
    MapsModule,
    FilemanagerModule,
    BlogModule,
    SharedModule,
    NgbModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule
  ]
})
export class AppsModule { }
