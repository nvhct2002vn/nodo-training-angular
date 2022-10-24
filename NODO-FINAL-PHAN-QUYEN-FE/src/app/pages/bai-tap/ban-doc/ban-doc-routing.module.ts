import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BanDocListComponent} from "./ban-doc-list/ban-doc-list.component";

const routes: Routes = [
    {
        path: '',
        component: BanDocListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BanDocRoutingModule {
}
