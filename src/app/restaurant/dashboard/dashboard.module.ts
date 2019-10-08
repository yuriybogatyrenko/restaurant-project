import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRouting} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';
import {GanttTimelineChartModule} from '@app/restaurant/gantt-timeline-chart/gantt-timeline-chart.module';
import {PopupRestaurantAddReservationModule} from '@app/restaurant/popups/dashboard/popup-restaurant-add-reservation/popup-restaurant-add-reservation.module';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRouting,
    GanttTimelineChartModule,
    PopupRestaurantAddReservationModule,
    MatInputModule
  ]
})
export class DashboardModule {
}
