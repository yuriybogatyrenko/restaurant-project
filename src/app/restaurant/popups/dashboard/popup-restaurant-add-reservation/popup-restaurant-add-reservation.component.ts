import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';
import {IReservation} from '@interfaces/reservation.interface';

@Component({
  selector: 'app-popup-restaurant-add-reservation',
  templateUrl: './popup-restaurant-add-reservation.component.html',
  styleUrls: ['./popup-restaurant-add-reservation.component.sass']
})
export class PopupRestaurantAddReservationComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { tables: IRestaurantTable[], reservation: IReservation }) {
  }

  ngOnInit() {
    this.data.tables.sort((a, b) => a.number - b.number);
    this.initForm();
  }

  initForm() {
    const reservation = this.data.reservation;
    console.log(new Date(this.getFormValue(reservation, 'date')).toISOString())
    this.form = this._fb.group({
      table: [this.getFormValue(reservation, 'tableId'), [Validators.required]],
      name: [this.getFormValue(reservation, 'name'), [Validators.required]],
      phone: [this.getFormValue(reservation, 'phone'), [Validators.required]],
      guestsCount: [this.getFormValue(reservation, 'guestCount', 1), [Validators.required]],
      timeStart: [this.getFormValue(reservation, 'timeStart'), [Validators.required]],
      timeEnd: [this.getFormValue(reservation, 'timeEnd'), [Validators.required]],
      date: [new Date(this.getFormValue(reservation, 'date')).toISOString(), [Validators.required]]
    });

    this.form.valueChanges.subscribe(console.log);
  }

  getFormValue(object: any, field: string, defaultValue?: any) {
    return object && object[field] ? object[field] : (defaultValue || null);
  }

  submit(e: Event) {
    e.preventDefault();
  }

}
