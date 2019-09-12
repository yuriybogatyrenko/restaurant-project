import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: `./client/client.module#ClientModule`
  },
  {
    path: 'admin',
    loadChildren: `./restaurant/restaurant.module#RestaurantModule`
  },
  {
    path: '**',
    redirectTo: '/admin/plan'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {
}
