import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {IRestaurantTableTimeline} from '@interfaces/restaurant-table.interface';

@Component({
  selector: 'app-timeline-item',
  template: '',
  styleUrls: ['./timeline-item.component.sass']
})
export class TimelineItemComponent implements OnInit {
  @Input() timeline: IRestaurantTableTimeline;
  @Input() gridSettings: { gridWidth: number, gridSteps: number, minuteFactor: number, defaultGridWidth: number };

  linebreakOffset = 2;

  constructor(private _elRef: ElementRef,
              private _renderer: Renderer2) {
  }

  ngOnInit() {
    this._renderer.setStyle(
      this._elRef.nativeElement,
      'left',
      `${(this.gridSettings.minuteFactor * (this.timeline.timeStart - 960) + this.linebreakOffset) / (this.gridSettings.gridSteps * Math.max(this.gridSettings.gridWidth, this.gridSettings.defaultGridWidth)) * 100}%`
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'width',
      `${(Math.abs(this.timeline.timeEnd - this.timeline.timeStart) * this.gridSettings.minuteFactor - this.linebreakOffset * 2) / (this.gridSettings.gridSteps * Math.max(this.gridSettings.gridWidth, this.gridSettings.defaultGridWidth)) * 100}%`
    );
  }

}
