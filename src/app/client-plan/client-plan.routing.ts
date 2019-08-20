import {NgModule} from '@angular/core';
import {ClientPlanComponent} from './client-plan.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: ClientPlanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPlanRouting {
}
