import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ClientPlanComponent} from '@app/client-plan/client-plan.component';

@Component({
  // tslint:disable-next-line
  selector: 'ui-table-selector',
  templateUrl: './table-selector.component.html',
  styleUrls: ['./table-selector.component.sass']
})
export class TableSelectorComponent implements OnInit {

  constructor(private _matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  selectTable(e: MouseEvent) {
    this._matDialog.open(ClientPlanComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      panelClass: 'dialog-padding-0'
    });
  }

}
