import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    /* Rutas Publicas*/
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.routes'),
  },
  {
    /*Rutas Privadas */
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
