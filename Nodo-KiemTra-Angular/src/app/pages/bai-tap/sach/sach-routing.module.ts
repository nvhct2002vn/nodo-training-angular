import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SachListComponent} from "./sach-list/sach-list.component";

const routes: Routes = [
    {
        path: '',
        component: SachListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SachRoutingModule {
}
