import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageClientReservationComponent} from '@app/client/page-client-reservation/page-client-reservation.component';
import {PageClientMapComponent} from '@app/client/page-client-map/page-client-map.component';
import {PageClientContactsComponent} from '@app/client/page-client-contacts/page-client-contacts.component';
import {PageClientTotalComponent} from '@app/client/page-client-total/page-client-total.component';


const routes: Routes = [
  {path: '', component: PageClientReservationComponent},
  {path: 'map', component: PageClientMapComponent},
  {path: 'contacts', component: PageClientContactsComponent},
  {path: 'total', component: PageClientTotalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRouting {
}
