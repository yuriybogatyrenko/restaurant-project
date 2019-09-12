import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientPlanComponent} from './client-plan.component';
import {ClientMapComponent} from './client-map/client-map.component';

@NgModule({
  declarations: [
    ClientPlanComponent,
    ClientMapComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ClientPlanComponent
  ],
  entryComponents: [
    ClientPlanComponent
  ]
})
export class ClientPlanModule {
}
