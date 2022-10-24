import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NhaXuatBanListComponent} from "./nha-xuat-ban-list/nha-xuat-ban-list.component";

const routes: Routes = [
    {
        path: '',
        component: NhaXuatBanListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NhaXuatBanRoutingModule {
}
