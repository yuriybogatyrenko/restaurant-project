import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';

@Injectable({providedIn: 'root'})
export class ReservationService {
  tables$: BehaviorSubject<IRestaurantTable[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
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
        tap((tables: any) => this.tables$.next(tables.items))
      );
  }
}
