import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TacGiaRoutingModule} from './tac-gia-routing.module';
import {TacGiaListComponent} from './tac-gia-list/tac-gia-list.component';
import {TacGiaFormComponent} from './tac-gia-form/tac-gia-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
    declarations: [
        TacGiaListComponent,
        TacGiaFormComponent
    ],
    imports: [
        CommonModule,
        TacGiaRoutingModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ]
})
export class TacGiaModule {
}
