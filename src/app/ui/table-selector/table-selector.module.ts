import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableSelectorComponent} from '@app/ui/table-selector/table-selector.component';
import {ClientPlanModule} from '@app/client-plan/client-plan.module';


@NgModule({
  declarations: [TableSelectorComponent],
  exports: [TableSelectorComponent],
  imports: [
    CommonModule,
    ClientPlanModule
  ]
})
export class TableSelectorModule {
}
