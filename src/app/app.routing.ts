import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./cricket-dashboard/cricket-dashboard.module').then(m => m.CricketDashboardModule)
      },
      {
        path: 'dashboard-material',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'account-list',
        component: AccountListComponent
      }
    ]
  }
];
