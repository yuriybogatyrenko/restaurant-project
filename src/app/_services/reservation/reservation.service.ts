import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  getReservationDays() {
    return this.http.post('', {
      method: 'getWorkDates',
      month: '2006-01'
    });
  }

  getReservationTime(date: string) {
    return this.http.post('', {
      method: 'getWorkTime',
      date,
    });
  }
}
