import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MuonSachListComponent} from "./muon-sach-list/muon-sach-list.component";

const routes: Routes = [
    {
        path: '',
        component: MuonSachListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MuonSachRoutingModule {
}
