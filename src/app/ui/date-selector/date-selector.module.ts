import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSelectorComponent } from './date-selector.component';
import {MomentModule} from 'ngx-moment';



@NgModule({
  declarations: [DateSelectorComponent],
  exports: [DateSelectorComponent],
  imports: [
    CommonModule,
    MomentModule
  ]
})
export class DateSelectorModule { }
