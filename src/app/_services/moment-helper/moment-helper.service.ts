import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({providedIn: 'root'})
export class MomentHelperService {
  constructor() {
  }

  generateCalendarArray(year?, month?) {
    let _year, _month;
    if (!year || !month) {
      _year = moment().year();
      _month = moment().month() + 1;
    }

    const startDate = moment([_year, _month - 1]);
    const endDate = moment(startDate).endOf('month');

    const dates = [];
    const weeks = [];

    let perWeek = [];
    const difference = endDate.diff(startDate, 'days');

    // make correct table days order
    if (perWeek.length < startDate.weekday()) {
      while (perWeek.length < startDate.weekday()) {
        perWeek.unshift(null);
      }
    }

    perWeek.push(startDate.toDate());
    let index = 0;
    let lastWeek = false;
    while (startDate.add(1, 'days').diff(endDate) < 0) {
      if (startDate.weekday() !== 0) {
        perWeek.push(startDate.toDate());
      } else {
        if ((startDate.clone().add(7, 'days').month() === (_month - 1))) {
          weeks.push(perWeek);
          perWeek = [];
          perWeek.push(startDate.toDate());
        } else if (Math.abs(index - difference) > 0) {
          if (!lastWeek) {
            weeks.push(perWeek);
            perWeek = [];
          }
          lastWeek = true;
          perWeek.push(startDate.toDate());
        }
      }
      index += 1;
      if ((lastWeek === true && Math.abs(index - difference) === 0) ||
        (Math.abs(index - difference) === 0 && perWeek.length === 1)) {
        weeks.push(perWeek);
      }
      dates.push(startDate.clone().toDate());
    }

    return weeks;
  }
}
