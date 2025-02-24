import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    /* Rutas Publicas*/
    path: '',
    loadComponent: () => import('./share/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.routes'),
      },
      {
        /*Rutas Privadas */
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
      path: '**',
      redirectTo: 'dashboard',
  }
];
