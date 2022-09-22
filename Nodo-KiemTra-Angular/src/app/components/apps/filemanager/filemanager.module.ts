import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilemanagerRoutingModule } from './filemanager-routing.module';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerListComponent,
    FileDetailsComponent,
    FileAttachmentsComponent
  ],
  imports: [
    CommonModule,
    FilemanagerRoutingModule,
    SharedModule,
    GalleryModule.withConfig({}),
    LightboxModule,
    CarouselModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class FilemanagerModule { }
