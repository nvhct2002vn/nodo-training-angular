import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { LeafletComponent } from './leaflet/leaflet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    LeafletComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    HttpClientModule,
    LeafletModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class MapsModule { }
