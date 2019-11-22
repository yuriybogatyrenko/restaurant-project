import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRouting} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';
import {GanttTimelineChartModule} from '@app/restaurant/gantt-timeline-chart/gantt-timeline-chart.module';
import {PopupRestaurantAddReservationModule} from '@app/restaurant/popups/dashboard/popup-restaurant-add-reservation/popup-restaurant-add-reservation.module';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MomentModule} from 'ngx-moment';
import {DateSelectorModule} from '@app/ui/date-selector/date-selector.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import {RestaurantItemModule} from '@app/modules/restaurant-item/restaurant-item.module';
import {GuestsSelectorModule} from '@app/ui/guests-selector/guests-selector.module';
import {TimeSelectorModule} from '@app/ui/time-selector/time-selector.module';
import {TableSelectorModule} from '@app/ui/table-selector/table-selector.module';
import {TextareaModule} from '@app/ui/textarea/textarea.module';


@NgModule({
  declarations: [DashboardComponent, BookDetailsComponent, BookAddComponent, BookEditComponent, BookFormComponent],
  imports: [
    CommonModule,
    DashboardRouting,
    GanttTimelineChartModule,
    PopupRestaurantAddReservationModule,
    MatInputModule,
    ReactiveFormsModule,
    MomentModule,
    DateSelectorModule,
    RestaurantItemModule,
    GuestsSelectorModule,
    TimeSelectorModule,
    TableSelectorModule,
    TextareaModule,
    MatSelectModule
  ]
})
export class DashboardModule {
}
