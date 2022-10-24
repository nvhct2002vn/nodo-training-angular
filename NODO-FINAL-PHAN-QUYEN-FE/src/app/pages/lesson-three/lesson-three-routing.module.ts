import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonThreeComponent } from './lesson-three.component';

const routes: Routes = [{ path: '', component: LessonThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonThreeRoutingModule { }
