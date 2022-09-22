import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryRoutingModule} from "./category-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {CategoryFormComponent} from "./category-form/category-form.component";

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryFormComponent
    ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
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
    entryComponents: [CategoryFormComponent]
})
export class CategoryModule {}
