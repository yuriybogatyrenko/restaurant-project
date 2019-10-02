import {Component, OnInit} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'restaurant-project';

  ngOnInit() {
    moment.locale('ru');
  }
}
