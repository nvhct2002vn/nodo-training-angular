import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BanDocRoutingModule} from './ban-doc-routing.module';
import {BanDocListComponent} from './ban-doc-list/ban-doc-list.component';
import {BanDocFormComponent} from './ban-doc-form/ban-doc-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
    declarations: [
        BanDocListComponent,
        BanDocFormComponent
    ],
    imports: [
        CommonModule,
        BanDocRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ]
})
export class BanDocModule {
}
