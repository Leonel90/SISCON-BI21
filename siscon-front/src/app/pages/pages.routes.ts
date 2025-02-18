import { Routes } from '@angular/router';

export default [
  {
    path: 'usuarios-c',
    loadComponent: () => import('./usuarios-c/usuarios-c.component'),
  },
  {
    path: 'usuarios-m',
    loadComponent: () => import('./usuarios-m/usuarios-m.component'),
  },
  {
    path: 'vehicul-c',
    loadComponent: () => import('./vehicul-c/vehicul-c.component'),
  },
  {
    path: 'vehiculo-m',
    loadComponent: () => import('./vehiculo-m/vehiculo-m.component'),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
] as Routes;
