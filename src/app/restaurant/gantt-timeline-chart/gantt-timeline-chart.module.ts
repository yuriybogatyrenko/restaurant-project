import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GanttTimelineChartComponent} from './gantt-timeline-chart.component';
import {MatDatepickerModule, MatDialogModule, MatNativeDateModule} from "@angular/material";


@NgModule({
  declarations: [GanttTimelineChartComponent],
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
