import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductsListSubjectComponent } from './filtered-products-list-subject.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [FilteredProductsListSubjectComponent],
  providers: [],
  exports: [FilteredProductsListSubjectComponent]
})
export class FilteredProductsListSubjectComponentModule {
}
