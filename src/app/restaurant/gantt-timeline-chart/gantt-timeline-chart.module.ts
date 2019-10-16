import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GanttTimelineChartComponent} from './gantt-timeline-chart.component';
import {MatDatepickerModule, MatDialogModule, MatNativeDateModule} from "@angular/material";
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineTableComponent } from './timeline-table/timeline-table.component';


@NgModule({
  declarations: [GanttTimelineChartComponent, TimelineItemComponent, TimelineTableComponent],
  exports: [
    GanttTimelineChartComponent,

    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class GanttTimelineChartModule {
}
