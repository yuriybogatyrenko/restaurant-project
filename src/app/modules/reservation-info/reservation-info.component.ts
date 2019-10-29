import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.sass']
})
export class ReservationInfoComponent implements OnInit {
  @Input() isTotal = false;

  constructor() {
  }

  ngOnInit() {
  }

}
