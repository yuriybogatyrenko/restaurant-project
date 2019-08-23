import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IRestaurantTable} from '../interfaces/restaurant-table.interface';
import {tables} from '../mokcs/tables';

@Component({
  selector: 'app-client-plan',
  templateUrl: './client-plan.component.html',
  styleUrls: ['./client-plan.component.sass']
})
export class ClientPlanComponent implements OnInit {
  tables$: BehaviorSubject<IRestaurantTable[]> = new BehaviorSubject([]);

  constructor() {
  }

  ngOnInit() {
    this.tables$.next(tables);
  }

}
