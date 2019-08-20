import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./client-plan/client-plan.module`).then(m => m.ClientPlanModule)
  },
  {
    path: 'admin',
    loadChildren: () => import(`./restaurant-plan/restaurant-plan.module`).then(m => m.RestaurantPlanModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {
}
