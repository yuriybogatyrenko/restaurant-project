import {Component, Inject, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tables} from '../mokcs/tables';
import {IRestaurantTable, RestaurantTableStatusEnum} from '@interfaces/restaurant-table.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UiNotificationService} from '@app/ui/ui-notification/ui-notification.service';

@Component({
  selector: 'app-client-plan',
  templateUrl: './client-plan.component.html',
  styleUrls: ['./client-plan.component.sass']
})
export class ClientPlanComponent implements OnInit {
  tables$: BehaviorSubject<IRestaurantTable[]> = new BehaviorSubject([]);

  selectedTable: IRestaurantTable;

  constructor(private _matDialogRef: MatDialogRef<ClientPlanComponent>,
              private _notificationS: UiNotificationService,
              @Inject(MAT_DIALOG_DATA) public model: IRestaurantTable) {
  }

  ngOnInit() {
    this.selectedTable = this.model;
    this.tables$.next(tables);
  }

  onPreview(table: IRestaurantTable) {
    if (table.status === RestaurantTableStatusEnum.BLOCKED) {
      this._notificationS.open({title: 'Столик занят'});
      return;
    }
    this.selectedTable = table;
  }

}
