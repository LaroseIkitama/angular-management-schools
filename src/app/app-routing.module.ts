import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { navigationGuard } from './core/guard/navigation.guard';
import { ForbiddenComponent } from './core/components/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },

  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module')
      .then(m => m.AuthModule),
    canActivate: [
      authGuard
    ]
  },
  {
    path: 'navigation',
    loadChildren:
      () => import('./features/navigation/navigation.module')
        .then(m => m.NavigationModule),
    canActivate: [
      navigationGuard
    ]
  }
  ,
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
