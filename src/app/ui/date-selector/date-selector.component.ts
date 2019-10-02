import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import * as moment from 'moment';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subject} from "rxjs";
import {untilDestroyed} from "ngx-take-until-destroy";

@Component({
  // tslint:disable-next-line
  selector: 'ui-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateSelectorComponent),
      multi: true
    }
  ]
})
export class DateSelectorComponent implements OnInit, OnDestroy {
  calendar: Array<any> = [];

  touches$ = new Subject<void>();
  changes$ = new Subject<any>();

  state: any;

  constructor(private _momentHelperS: MomentHelperService) {
  }

  ngOnInit() {
    moment.locale('RU');
    this.calendar = this._momentHelperS.generateCalendarArray();
  }

  registerOnChange(fn: any) {
    this.changes$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches$
      .pipe(untilDestroyed(this))
      .subscribe(fn);
  }

  writeValue(rawValue: any) {
    this.state = rawValue;
    this.changes$.next(rawValue);
  }

  updateValue(value) {
    this.writeValue(value);
  }

  ngOnDestroy() {
  }
}
