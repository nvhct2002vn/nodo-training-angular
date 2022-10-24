import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {QuanLyPhanQuyenListComponent} from "./quan-ly-phan-quyen-list/quan-ly-phan-quyen-list.component";

const routes: Routes = [
    {
        path:'',
        component:QuanLyPhanQuyenListComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyPhanQuyenRoutingModule { }
