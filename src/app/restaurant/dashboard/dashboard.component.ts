import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {IReservation} from '@interfaces/reservation.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  tables$: Observable<IRestaurantTable[]> = this._reservationS.tables$;
  // tableTime$
  form: FormGroup;

  timelineHeaderItems = [];

  constructor(private _matDialog: MatDialog,
              private _reservationS: ReservationService,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      date: [new Date().toISOString()]
    });


    this.getTables(this.form.value.date);
    this._reservationS.getReservationTime(moment(this.form.value.date).format('YYYY-MM-DD'))
      .pipe(untilDestroyed(this))
      .subscribe((items: any) => this.timelineHeaderItems = items.items.filter(item => item.title.indexOf(':00') !== -1));

    this.form.controls.date.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((date) => {
        this.getTables(date);
      });
  }

  getTables(date) {
    this._reservationS.getReservationTables({timecode: moment(date).format('YYYY-MM-DD')})
      .pipe(
        untilDestroyed(this),
        take(1)
      )
      .subscribe();
  }

  addReservation(e: Event) {
    e.preventDefault();

    /*this._matDialog.open(PopupRestaurantAddReservationComponent, {
      data: {
        tables: this.tables,
        date: this.form.value.date
      },
      // width: '100%',
      // height: '100%',
      // maxWidth: '100vw',
      // maxHeight: '100vw'
    });*/
  }

  onTableSelect(reservation: IReservation) {
    /*this._matDialog.open(PopupRestaurantAddReservationComponent, {
      data: {
        tables: this.tables,
        reservation
      }
    });*/
  }

  changePickerDay(state: number) {
    this.form.patchValue({date: moment(this.form.value.date).add(state, 'days').toISOString()});
  }

  ngOnDestroy() {
  }

}
