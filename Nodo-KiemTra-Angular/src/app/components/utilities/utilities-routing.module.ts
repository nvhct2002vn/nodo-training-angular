import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { BorderComponent } from './border/border.component';
import { DisplayComponent } from './display/display.component';
import { ExtrasComponent } from './extras/extras.component';
import { FlexComponent } from './flex/flex.component';
import { HeightComponent } from './height/height.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { PositionComponent } from './position/position.component';
import { WidthComponent } from './width/width.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'background',
        component: BackgroundComponent
      },
      {
        path: 'border',
        component: BorderComponent
      },
      {
        path: 'display',
        component: DisplayComponent
      },
      {
        path: 'extras',
        component: ExtrasComponent
      },
      {
        path: 'flex',
        component: FlexComponent
      },
      {
        path: 'height',
        component: HeightComponent
      },
      {
        path: 'margin',
        component: MarginComponent
      },
      {
        path: 'padding',
        component: PaddingComponent
      },
      {
        path: 'position',
        component: PositionComponent
      },
      {
        path: 'width',
        component: WidthComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
