import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupRestaurantAddReservationComponent} from './popup-restaurant-add-reservation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [PopupRestaurantAddReservationComponent],
  entryComponents: [PopupRestaurantAddReservationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule
  ]
})
export class PopupRestaurantAddReservationModule {
}
