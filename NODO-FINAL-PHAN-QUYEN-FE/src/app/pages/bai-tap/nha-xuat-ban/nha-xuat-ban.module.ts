import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NhaXuatBanRoutingModule} from './nha-xuat-ban-routing.module';
import {NhaXuatBanFormComponent} from './nha-xuat-ban-form/nha-xuat-ban-form.component';
import {NhaXuatBanListComponent} from './nha-xuat-ban-list/nha-xuat-ban-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
    declarations: [
        NhaXuatBanFormComponent,
        NhaXuatBanListComponent
    ],
    imports: [
        CommonModule,
        NhaXuatBanRoutingModule,
        MatFormFieldModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatRadioModule
    ]
})
export class NhaXuatBanModule {
}
