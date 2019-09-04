import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IRestaurantTable} from '../../../interfaces/restaurant-table.interface';

@Component({
  selector: 'app-popup-table-info',
  templateUrl: './popup-table-info.component.html',
  styleUrls: ['./popup-table-info.component.sass']
})
export class PopupTableInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public table: IRestaurantTable) { }

  ngOnInit() {
  }

}
