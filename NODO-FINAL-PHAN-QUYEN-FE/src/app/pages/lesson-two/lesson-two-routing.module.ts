import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonTwoComponent } from './lesson-two.component';

const routes: Routes = [{ path: '', component: LessonTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonTwoRoutingModule { }
