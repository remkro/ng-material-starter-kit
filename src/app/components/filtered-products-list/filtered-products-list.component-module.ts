import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductsListComponent } from './filtered-products-list.component';
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterLink],
  declarations: [FilteredProductsListComponent],
  providers: [],
  exports: [FilteredProductsListComponent]
})
export class FilteredProductsListComponentModule {
}
