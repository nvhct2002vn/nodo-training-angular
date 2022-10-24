import { Routes } from '@angular/router';

export const customRoute: Routes = [
  {
    path: 'custom-pages',
    loadChildren: () => import('../../pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  }
];
