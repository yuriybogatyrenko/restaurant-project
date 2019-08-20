import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientPlanComponent} from './client-plan.component';
import {ClientPlanRouting} from './client-plan.routing';

@NgModule({
  declarations: [ClientPlanComponent],
  imports: [
    CommonModule,
    ClientPlanRouting
  ]
})
export class ClientPlanModule {
}
