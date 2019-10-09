import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import Konva from 'konva';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';
import {AdminRestaurantTablesQuery, AdminRestaurantTablesService} from '@state/admin-restaurant-table';
import {TimeHelper} from '@app/helpers/time/time.helper';

@Component({
  selector: 'app-gantt-timeline-chart',
  templateUrl: './gantt-timeline-chart.component.html',
  styleUrls: ['./gantt-timeline-chart.component.sass']
})
export class GanttTimelineChartComponent implements OnInit, OnDestroy {
  @Input() tables: IRestaurantTable[] = [];
  stage: Konva.Stage;

  @Output() tableSelect = new EventEmitter();

  lineStyle = {
    stroke: '#000',
    strokeWidth: 1,
  };

  timeLineStart: number = 8 * 60;
  timeLineEnd: number = 24 * 60;
  timeLineStep = 60;
  gridSize = 40;
  minuteFactor: number = this.gridSize / this.timeLineStep;
  timeLineStrokeWidth = 10;

  gridSteps = Math.abs(this.timeLineStart - this.timeLineEnd) / this.timeLineStep;

  constructor(private _tableS: AdminRestaurantTablesService,
              private _tableQ: AdminRestaurantTablesQuery,
              private _timeHelper: TimeHelper) {
  }

  ngOnInit() {
    // this.tables = tables || [];
    this.stage = new Konva.Stage({
      width: this.gridSize * this.gridSteps + this.gridSize,
      height: this.gridSize * this.tables.length + this.gridSize,
      container: '#timeline-chart'
    });

    this.drawGrid();
    this.drawTables();

    this.drawTimeline();

    this.stage.draw();
  }

  drawGrid() {
    const gridLayer = new Konva.Layer();
    for (let i = 0; i < (this.gridSteps); i++) {
      let verticalLine = new Konva.Line({
        points: [i * this.gridSize + this.gridSize, 0, i * this.gridSize + this.gridSize, this.stage.height()],
        ...this.lineStyle
      });

      let timeTitle = new Konva.Text({
        text: this._timeHelper.getTimeFromMinutes(this.timeLineStart + i * this.timeLineStep),
        x: this.gridSize + this.gridSize * i + this.gridSize / 2,
        y: this.gridSize / 2
      });

      timeTitle.offsetX(timeTitle.width() / 2);
      timeTitle.offsetY(timeTitle.height() / 2);

      gridLayer.add(timeTitle);
      gridLayer.add(verticalLine);
    }

    for (let z = 0; z < this.tables.length + 1; z++) {
      if (z === 0) {
        continue;
      }
      let horizontalLine = new Konva.Line({
        points: [0, z * this.gridSize, this.stage.width(), z * this.gridSize],
        ...this.lineStyle
      });

      gridLayer.add(horizontalLine);
    }

    this.stage.add(gridLayer);
  }

  drawTables() {
    const tableLayer = new Konva.Layer();

    this.tables.forEach((table, i) => {
      const tableText = new Konva.Text({
        text: table.number.toString(),
        x: this.gridSize / 2,
        y: this.gridSize / 2 + this.gridSize * i + this.gridSize
      });

      tableText.offset({
        x: tableText.width() / 2,
        y: tableText.height() / 2
      });

      const tableBackground = new Konva.Circle({
        radius: this.gridSize * 0.8 / 2,
        x: this.gridSize / 2,
        y: this.gridSize / 2 + this.gridSize + this.gridSize * i,
        fill: '#eee'
      });

      tableLayer.add(tableBackground);
      tableLayer.add(tableText);
    });

    this.stage.add(tableLayer);
  }

  drawTimeline() {
    const timelineLayer = new Konva.Layer({
      x: this.gridSize,
      y: this.gridSize,
      width: this.stage.width() - this.gridSize,
      height: this.stage.height() - this.gridSize,
    });

    this.tables.forEach((item, index) => {
      item._timeline.forEach((timeline) => {
        const _timeline = new Konva.Line({
          points: [
            (timeline.timeStart - this.timeLineStart) * this.minuteFactor + this.timeLineStrokeWidth / 2,
            this.gridSize * index + this.gridSize / 2,
            (timeline.timeEnd - this.timeLineStart) * this.minuteFactor - this.timeLineStrokeWidth / 2,
            this.gridSize * index + this.gridSize / 2
          ],
          ...this.lineStyle,
          strokeWidth: 10,
          stroke: 'red',
          lineCap: 'round'
        });

        _timeline.on('click tap', (e) => {
          this.tableSelect.emit(timeline);
        });

        timelineLayer.add(_timeline);
      });
    });

    this.stage.add(timelineLayer);
  }

  ngOnDestroy() {
  }

}
