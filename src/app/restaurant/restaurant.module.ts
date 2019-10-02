import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantRouting} from './restaurant.routing';
import {GanttTimelineChartModule} from "@app/restaurant/gantt-timeline-chart/gantt-timeline-chart.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestaurantRouting,
    GanttTimelineChartModule
  ]
})
export class RestaurantModule {
}
