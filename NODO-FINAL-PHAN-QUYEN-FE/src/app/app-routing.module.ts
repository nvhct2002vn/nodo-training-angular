import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guard/auth.guard';
import {ContentLayoutComponent} from './shared/layout-components/layout/content-layout/content-layout.component';
import {content} from './shared/routes/routes';
import {Error404Component} from "./pages/authentication/error404/error404.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pages/training',
        pathMatch: 'full'
    },
    {
        path: 'pages',
        component: ContentLayoutComponent,
        canActivate: [AuthGuard],
        children: content
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '**',
        component: Error404Component
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
