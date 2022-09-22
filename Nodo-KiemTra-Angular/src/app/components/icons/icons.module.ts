import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { FontAwsomeComponent } from './font-awsome/font-awsome.component';
import { MaterialDesignIconsComponent } from './material-design-icons/material-design-icons.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { Pe7IconsComponent } from './pe7-icons/pe7-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { TypiconsComponent } from './typicons/typicons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FontAwsomeComponent,
    MaterialDesignIconsComponent,
    SimpleLineIconsComponent,
    FeatherIconsComponent,
    IonicIconsComponent,
    FlagIconsComponent,
    Pe7IconsComponent,
    ThemifyIconsComponent,
    TypiconsComponent,
    WeatherIconsComponent,
    MaterialIconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class IconsModule { }
