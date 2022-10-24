import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { EChartsComponent } from './echarts/echarts.component';
import { ChartlistComponent } from './chartlist/chartlist.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ApexChartsComponent,
    EChartsComponent,
    ChartlistComponent,
    ChartjsComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartistModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ChartModule { }
