import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientComponent} from './client.component';
import {PageClientReservationComponent} from './page-client-reservation/page-client-reservation.component';
import {PageClientContactsComponent} from './page-client-contacts/page-client-contacts.component';
import {PageClientTotalComponent} from './page-client-total/page-client-total.component';
import {PageClientMapComponent} from './page-client-map/page-client-map.component';
import {ClientRouting} from '@app/client/client.routing';
import {RestaurantItemModule} from '@app/modules/restaurant-item/restaurant-item.module';
import {GuestsSelectorModule} from '@app/ui/guests-selector/guests-selector.module';
import {DateSelectorModule} from '@app/ui/date-selector/date-selector.module';
import {TimeSelectorModule} from '@app/ui/time-selector/time-selector.module';
import {TableSelectorModule} from '@app/ui/table-selector/table-selector.module';
import {TableWishesModule} from '@app/ui/table-wishes/table-wishes.module';
import {ClientPlanModule} from '@app/client-plan/client-plan.module';
import {MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    ClientComponent,
    PageClientReservationComponent,
    PageClientContactsComponent,
    PageClientTotalComponent,
    PageClientMapComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ClientRouting,
    ClientPlanModule,
    RestaurantItemModule,
    GuestsSelectorModule,
    DateSelectorModule,
    TimeSelectorModule,
    TableSelectorModule,
    TableWishesModule
  ]
})
export class ClientModule {
}
