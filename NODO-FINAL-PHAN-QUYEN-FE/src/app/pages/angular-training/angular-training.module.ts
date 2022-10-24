import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularTrainingRoutingModule } from './angular-training-routing.module';
import { AngularTrainingComponent } from './angular-training.component';


@NgModule({
  declarations: [
    AngularTrainingComponent
  ],
  imports: [
    CommonModule,
    AngularTrainingRoutingModule
  ]
})
export class AngularTrainingModule { }
