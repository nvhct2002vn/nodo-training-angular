import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { Dashboard02Component } from './dashboard02/dashboard02.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard01',
        component: Dashboard01Component
      },
      {
        path: 'dashboard02',
        component: Dashboard02Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
