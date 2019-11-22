import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {expand, filter, map, take, tap} from 'rxjs/operators';
import {BehaviorSubject, EMPTY, empty, of} from 'rxjs';
import {IRestaurantTable, IRestaurantTableTimeline} from '@interfaces/restaurant-table.interface';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Moment} from 'moment';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';
import * as moment from 'moment';

@Injectable({providedIn: 'root'})
export class ReservationService {
  tables$: BehaviorSubject<IRestaurantTable[]> = new BehaviorSubject([]);
  reservationTime$: BehaviorSubject<IRestaurantTableTimeline>;

  constructor(private http: HttpClient,
              private _momentHelper: MomentHelperService) {
  }

  getReservationDays(month: string) {
    return this.http.post('', {
      method: 'getWorkDates',
      month,
    });
  }

  getReservationTime(date: string) {
    return this.http.post('', {
      method: 'getWorkTime',
      date,
    });
  }

  getReservationTables(data) {
    return this.http.post('', {
      method: 'tablesSearch',
      num_guests: data.num_guests,
      timecode: data.timecode
    })
      .pipe(
        map((items: any) => items.items.map(item => {
          return {
            ...item,
            _numGuestsDisabled: item.num_persons >= data.num_guests
          };
        })),
        tap((tables: any) => {
          this.tables$.next(tables);
        })
      );
  }
}
