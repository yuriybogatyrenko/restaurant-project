import {Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import Konva from 'konva';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';
import {AdminRestaurantTablesQuery, AdminRestaurantTablesService} from '@state/admin-restaurant-table';
import {TimeHelper} from '@app/helpers/time/time.helper';
import {reservationStart} from '@app/mokcs/tables';

@Component({
  selector: 'app-gantt-timeline-chart',
  templateUrl: './gantt-timeline-chart.component.html',
  styleUrls: ['./gantt-timeline-chart.component.sass']
})
export class GanttTimelineChartComponent implements OnInit, OnDestroy {
  @Input() tables: IRestaurantTable[] = [];
  stage: Konva.Stage;
  containerPadding = 0;

  timelineHeaderItems = reservationStart.filter((item, index) => item.title.indexOf(':00') !== -1 && index !== reservationStart.length - 1);

  stickyLeft = this.containerPadding;

  @Output() tableSelect = new EventEmitter();

  lineStyle = {
    stroke: '#000',
    strokeWidth: 1,
  };

  timeLineStart: number = 16 * 60;
  timeLineEnd: number = 24 * 60;
  timeLineStep = 60;

  gridHeight = 24;
  gridWidth = 40;
  defaultGridWidth = 40;
  timeLineStrokeWidth = 10;

  minuteFactor: number = this.gridWidth / this.timeLineStep;

  gridSteps = Math.abs(this.timeLineStart - this.timeLineEnd) / this.timeLineStep;

  resizeTimeout;

  @HostListener('window:resize', ['$event'])
  onResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.stage.destroy();
      this.init();
    }, 500);
  }

  constructor(private _tableS: AdminRestaurantTablesService,
              private _tableQ: AdminRestaurantTablesQuery,
              private _timeHelper: TimeHelper,
              private _elRef: ElementRef) {
  }

  ngOnInit() {
    // this.tables = tables || [];

    this.init();
  }

  init() {
    this.stage = new Konva.Stage({
      container: '#timeline-chart',
      draggable: false,
    });

    this.gridWidth = Math.max(this._elRef.nativeElement.clientWidth / (this.gridSteps + 1), this.defaultGridWidth);
    this.minuteFactor = this.gridWidth / this.timeLineStep;

    this.stage.width(Math.max(this.gridWidth * this.gridSteps + this.gridWidth, this._elRef.nativeElement.clientWidth));
    this.stage.height(this.gridHeight * this.tables.length + this.gridHeight);

    this.drawGrid();
    this.drawTables();

    this.stage.draw();
  }

  drawGrid() {
    const gridLayer = new Konva.Layer();
    for (let i = 0; i < (this.gridSteps); i++) {
      const verticalLine = new Konva.Line({
        preventDefault: false,
        points: [i * this.gridWidth + this.gridWidth, 0, i * this.gridWidth + this.gridWidth, this.stage.height()],
        ...this.lineStyle
      });

      const timeTitle = new Konva.Text({
        preventDefault: false,
        text: this._timeHelper.getTimeFromMinutes(this.timeLineStart + i * this.timeLineStep),
        x: this.gridWidth + this.gridWidth * i + this.gridWidth / 2,
        y: this.gridHeight / 2
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
      const horizontalLine = new Konva.Line({
        preventDefault: false,
        points: [0, z * this.gridHeight, this.stage.width(), z * this.gridHeight],
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
        preventDefault: false,
        text: table.number.toString(),
        x: this.gridWidth / 2,
        y: this.gridHeight / 2 + this.gridHeight * i + this.gridHeight
      });

      tableText.offset({
        x: tableText.width() / 2,
        y: tableText.height() / 2
      });

      const tableBackground = new Konva.Circle({
        preventDefault: false,
        radius: Math.min(this.gridWidth, this.gridHeight) * 0.8 / 2,
        x: this.gridWidth / 2,
        y: this.gridHeight / 2 + this.gridHeight + this.gridHeight * i,
        fill: '#eee'
      });

      tableLayer.add(tableBackground);
      tableLayer.add(tableText);
    });

    this.stage.add(tableLayer);
  }

  onScroll(e) {
    this.stickyLeft = -e.target.scrollLeft + this.containerPadding;
  }

  ngOnDestroy() {
  }

}