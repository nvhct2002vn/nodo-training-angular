import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';

const routes: Routes = [
  {
    path: 'filemanager',
    children: [
      {
        path: 'file-attachments',
        component: FileAttachmentsComponent
      },
      {
        path: 'file-details',
        component: FileDetailsComponent
      },
      {
        path: 'file-manager',
        component: FileManagerComponent
      },
      {
        path: 'file-managerlist',
        component: FileManagerListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilemanagerRoutingModule { }
