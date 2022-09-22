import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonFourComponent } from './lesson-four.component';

const routes: Routes = [{ path: '', component: LessonFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonFourRoutingModule { }
