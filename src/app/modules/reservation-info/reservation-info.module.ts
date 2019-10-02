import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationInfoComponent} from './reservation-info.component';
import {RestaurantItemModule} from "@app/modules/restaurant-item/restaurant-item.module";


@NgModule({
  declarations: [ReservationInfoComponent],
  exports: [
    ReservationInfoComponent
  ],
  imports: [
    CommonModule,
    RestaurantItemModule
  ]
})
export class ReservationInfoModule {
}
