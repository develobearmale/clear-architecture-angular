import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './presentation/utils/routes';

const routes: Routes = [
  {
    path: ROUTES.APP.PATH, 
    loadChildren: () => import('./presentation/views/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.APP.PATH,
  },
  {
    path: '**',
    redirectTo: ROUTES.APP.PATH,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
