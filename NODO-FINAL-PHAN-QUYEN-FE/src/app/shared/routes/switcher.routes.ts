import { Routes } from '@angular/router';

export const switcher: Routes = [
  {
    path: 'switcher',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
  }
];
