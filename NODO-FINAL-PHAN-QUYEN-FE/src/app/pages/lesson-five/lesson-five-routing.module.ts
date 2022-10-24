import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonFiveComponent } from './lesson-five.component';

const routes: Routes = [{ path: '', component: LessonFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonFiveRoutingModule { }
