import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableSelectorComponent} from '@app/ui/table-selector/table-selector.component';


@NgModule({
  declarations: [TableSelectorComponent],
  exports: [TableSelectorComponent],
  imports: [
    CommonModule
  ]
})
export class TableSelectorModule {
}
