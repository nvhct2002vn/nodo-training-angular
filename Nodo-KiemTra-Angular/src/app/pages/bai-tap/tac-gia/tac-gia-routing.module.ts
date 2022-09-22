import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TacGiaListComponent} from "./tac-gia-list/tac-gia-list.component";

const routes: Routes = [
    {
        path: '', component: TacGiaListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TacGiaRoutingModule {
}
