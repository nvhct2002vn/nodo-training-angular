import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FontAwsomeComponent } from './font-awsome/font-awsome.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';
import { MaterialDesignIconsComponent } from './material-design-icons/material-design-icons.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';
import { Pe7IconsComponent } from './pe7-icons/pe7-icons.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { TypiconsComponent } from './typicons/typicons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'feather-icons',
        component: FeatherIconsComponent
      },
      {
        path: 'flag-icons',
        component: FlagIconsComponent
      },
      {
        path: 'fontawsome',
        component: FontAwsomeComponent
      },
      {
        path: 'ionic-icons',
        component: IonicIconsComponent
      },
      {
        path: 'material-design-icons',
        component: MaterialDesignIconsComponent
      },
      {
        path: 'material-icons',
        component: MaterialIconsComponent
      },
      {
        path: 'pe7-icons',
        component: Pe7IconsComponent
      },
      {
        path: 'simple-line-icons',
        component: SimpleLineIconsComponent
      },
      {
        path: 'themify-icons',
        component: ThemifyIconsComponent
      },
      {
        path: 'tyicons',
        component: TypiconsComponent
      },
      {
        path: 'weather-icons',
        component: WeatherIconsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
