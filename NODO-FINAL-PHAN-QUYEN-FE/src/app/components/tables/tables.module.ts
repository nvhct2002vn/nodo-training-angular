import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { DefaultTablesComponent } from './default-tables/default-tables.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// Angular material table
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbTableComponent } from './data_table_components/ngb-table/ngb-table.component';
import { BasicAngularTableComponent } from './data_table_components/basic-angular-table/basic-angular-table.component';
import { AddRemoveDataComponent } from './data_table_components/add-remove-data/add-remove-data.component';
import { SortingFilterPaginationTableComponent } from './data_table_components/sorting-filter-pagination-table/sorting-filter-pagination-table.component';
import { StickyheaderComponent } from './data_table_components/stickyheader/stickyheader.component';
import { SelectionTableComponent } from './data_table_components/selection-table/selection-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesComponent } from './data-tables/data-tables.component';

@NgModule({
  declarations: [
    DefaultTablesComponent,
    DataTablesComponent,
    NgbTableComponent,
    BasicAngularTableComponent,
    AddRemoveDataComponent,
    SortingFilterPaginationTableComponent,
    SelectionTableComponent,
    StickyheaderComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    NgSelectModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class TablesModule { }
