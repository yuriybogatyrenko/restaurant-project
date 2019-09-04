import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IRestaurantTable} from '../interfaces/restaurant-table.interface';
import {tables} from '../mokcs/tables';
import {MatDialog} from '@angular/material';
import {PopupTableInfoComponent} from './_popups/popup-table-info/popup-table-info.component';

@Component({
  selector: 'app-client-plan',
  templateUrl: './client-plan.component.html',
  styleUrls: ['./client-plan.component.sass']
})
export class ClientPlanComponent implements OnInit {
  tables$: BehaviorSubject<IRestaurantTable[]> = new BehaviorSubject([]);

  constructor(private _matDialog: MatDialog) {
  }

  ngOnInit() {
    this.tables$.next(tables);
  }

  onPreview(table: IRestaurantTable) {
    this._matDialog.open(PopupTableInfoComponent, {
      data: table
    });
  }

}
