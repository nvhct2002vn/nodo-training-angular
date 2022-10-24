import {RouterModule, Routes} from "@angular/router";
import {CategoryMappingListComponent} from "./category-mapping-list/category-mapping-list.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
       path: '',
       component: CategoryMappingListComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryMappingRoutingModule {}
