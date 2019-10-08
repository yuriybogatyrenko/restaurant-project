import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IRestaurantTable} from '@interfaces/restaurant-table.interface';

@Component({
  selector: 'app-popup-restaurant-add-reservation',
  templateUrl: './popup-restaurant-add-reservation.component.html',
  styleUrls: ['./popup-restaurant-add-reservation.component.sass']
})
export class PopupRestaurantAddReservationComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { tables: IRestaurantTable[] }) {
  }

  ngOnInit() {
    this.data.tables.sort((a, b) => a.number - b.number);
    this.form = this._fb.group({
      table: [null, [Validators.required]],
      timeStart: [null, [Validators.required]],
      timeEnd: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }

}
