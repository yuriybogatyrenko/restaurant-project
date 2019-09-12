import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'plan', loadChildren: './restaurant-plan/restaurant-plan.module#RestaurantPlanModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRouting { }
