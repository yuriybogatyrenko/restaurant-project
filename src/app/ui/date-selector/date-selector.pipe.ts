import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateSelectorDay'
})
export class DateSelectorDayPipe implements PipeTransform {
  constructor() {
  }

  transform(value: number): string {
    return moment().isSame(moment.unix(value), 'day')
      ? `Сегодня &bull; `
      : moment().add(1, 'days')
        .isSame(moment.unix(value), 'day')
        ? `Завтра &bull; `
        : '';
  }

}
