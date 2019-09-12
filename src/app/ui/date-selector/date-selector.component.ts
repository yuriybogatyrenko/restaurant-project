import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';

@Component({
  // tslint:disable-next-line
  selector: 'ui-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.sass']
})
export class DateSelectorComponent implements OnInit {
  calendar: Array<any> = [];

  constructor(private _momentHelperS: MomentHelperService) {
  }

  ngOnInit() {
    moment.locale('RU');
    this.calendar = this._momentHelperS.generateCalendarArray();
    console.log(this.calendar);
  }



}
