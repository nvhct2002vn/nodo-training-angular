import { Routes } from '@angular/router';

export const errorRoute: Routes = [
  {
    path: 'error-pages',
    loadChildren: () => import('../../pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  }
];
