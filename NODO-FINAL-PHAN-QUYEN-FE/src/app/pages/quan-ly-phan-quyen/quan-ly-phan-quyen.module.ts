import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyPhanQuyenRoutingModule } from './quan-ly-phan-quyen-routing.module';
import { QuanLyPhanQuyenListComponent } from './quan-ly-phan-quyen-list/quan-ly-phan-quyen-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import { PhanQuyenComponent } from './phan-quyen/phan-quyen.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    QuanLyPhanQuyenListComponent,
    PhanQuyenComponent
  ],
    imports: [
        CommonModule,
        QuanLyPhanQuyenRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        FormsModule
    ]
})
export class QuanLyPhanQuyenModule { }
