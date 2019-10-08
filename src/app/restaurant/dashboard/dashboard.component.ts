import {Component, OnInit} from '@angular/core';
import {tables} from '@app/mokcs/tables';
import {MatDialog} from '@angular/material';
import {PopupRestaurantAddReservationComponent} from '@app/restaurant/popups/dashboard/popup-restaurant-add-reservation/popup-restaurant-add-reservation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tables = tables;

  constructor(private _matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  addReservation(e: Event) {
    e.preventDefault();

    this._matDialog.open(PopupRestaurantAddReservationComponent, {
      data: {
        tables: this.tables
      }
    });
  }

}
