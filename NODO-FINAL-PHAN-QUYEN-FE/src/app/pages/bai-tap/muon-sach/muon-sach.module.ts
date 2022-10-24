import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuonSachRoutingModule } from './muon-sach-routing.module';
import { MuonSachListComponent } from './muon-sach-list/muon-sach-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { MuonSachFormComponent } from './muon-sach-form/muon-sach-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    MuonSachListComponent,
    MuonSachFormComponent
  ],
    imports: [
        CommonModule,
        MuonSachRoutingModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ]
})
export class MuonSachModule { }
