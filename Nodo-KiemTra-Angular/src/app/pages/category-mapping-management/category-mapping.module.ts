import {NgModule} from "@angular/core";
import {CategoryMappingListComponent} from "./category-mapping-list/category-mapping-list.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CategoryMappingRoutingModule} from "./category-mapping-routing.module";

@NgModule({
    declarations: [
        CategoryMappingListComponent
    ],
    imports: [
        CommonModule,
        CategoryMappingRoutingModule,
        SharedModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatInputModule,
        NgSelectModule,
        NgxDatatableModule,
        NgbModule,
        FormsModule, ReactiveFormsModule
    ],
    entryComponents: []
})
export class CategoryMappingModule {}
