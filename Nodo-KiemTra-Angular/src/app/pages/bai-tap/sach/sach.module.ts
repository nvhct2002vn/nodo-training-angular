import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SachRoutingModule} from './sach-routing.module';
import {MatDialogModule} from "@angular/material/dialog";
import {SachListComponent} from "./sach-list/sach-list.component";
import {SachFormComponent} from "./sach-form/sach-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        SachListComponent,
        SachFormComponent,
    ],
    imports: [
        CommonModule,
        SachRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ]
})
export class SachModule {
}
