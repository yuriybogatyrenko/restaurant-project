import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-client-total',
  templateUrl: './page-client-total.component.html',
  styleUrls: ['./page-client-total.component.sass']
})
export class PageClientTotalComponent implements OnInit {
  @Input() type: 'SMS' | 'CALL' = 'SMS';

  constructor() {
  }

  ngOnInit() {
  }

}
