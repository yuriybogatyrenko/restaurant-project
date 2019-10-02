import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: 'dateSelectorDay'
})
export class DateSelectorDayPipe implements PipeTransform {
  constructor() {
  }

  transform(value: Date): string {
    console.log(value);
    return moment().isSame(value, 'day') ? `Сегодня &bull; ` : moment().add(1, 'days').isSame(value, 'day') ? `Завтра &bull; ` : '';
  }

}
