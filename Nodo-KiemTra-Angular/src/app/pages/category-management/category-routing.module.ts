import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {}
