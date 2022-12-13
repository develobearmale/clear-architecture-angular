import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../utils/routes';
import { MainAppComponent } from './main-app.component';

const routes: Routes = [
  {
    path: '', component: MainAppComponent,
    children: [
      {
        path: ROUTES.APP.ROUTES.PROFILE.PATH,
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.APP.ROUTES.HOME.PATH,
  },
  {
    path: '**',
    redirectTo: ROUTES.APP.ROUTES.HOME.PATH,
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class MainRoutingModule { }
