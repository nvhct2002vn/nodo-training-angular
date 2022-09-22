import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { DefaultTablesComponent } from './default-tables/default-tables.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'data-tables',
        component: DataTablesComponent
      },
      {
        path: 'default-tables',
        component: DefaultTablesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
