import {Component, OnInit} from '@angular/core';
import {tables} from '@app/mokcs/tables';
import {MatDialog} from '@angular/material';
import {PopupRestaurantAddReservationComponent} from '@app/restaurant/popups/dashboard/popup-restaurant-add-reservation/popup-restaurant-add-reservation.component';
import {IReservation} from '@interfaces/reservation.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tables = tables;
  form: FormGroup;

  constructor(private _matDialog: MatDialog,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      date: [new Date().toISOString()]
    });

    this.form.valueChanges.subscribe(console.log)
  }

  addReservation(e: Event) {
    e.preventDefault();

    this._matDialog.open(PopupRestaurantAddReservationComponent, {
      data: {
        tables: this.tables,
        date: this.form.value.date
      },
      // width: '100%',
      // height: '100%',
      // maxWidth: '100vw',
      // maxHeight: '100vw'
    });
  }

  onTableSelect(reservation: IReservation) {
    this._matDialog.open(PopupRestaurantAddReservationComponent, {
      data: {
        tables: this.tables,
        reservation
      }
    });
  }

  changePickerDay(state: number) {
    this.form.patchValue({date: moment(this.form.value.date).add(state, 'days').toISOString()});
  }

}
