import { Routes } from '@angular/router';

export const routes: Routes = [
  { /* Rutas Publicas*/
    path:'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  { /*Rutas Privadas */
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
  }
];
