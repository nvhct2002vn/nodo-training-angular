import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTrainingComponent } from './angular-training.component';

const routes: Routes = [{ path: '', component: AngularTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularTrainingRoutingModule { }
