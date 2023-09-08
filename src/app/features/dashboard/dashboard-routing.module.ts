import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  { path: 'welcome', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
