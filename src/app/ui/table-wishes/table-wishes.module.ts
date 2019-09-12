import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableWishesComponent } from './table-wishes.component';



@NgModule({
  declarations: [TableWishesComponent],
  exports: [TableWishesComponent],
  imports: [
    CommonModule
  ]
})
export class TableWishesModule { }
