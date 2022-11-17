import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryMenuComponent } from './category-menu.component';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatMenuModule, CommonModule],
  declarations: [CategoryMenuComponent],
  providers: [],
  exports: [CategoryMenuComponent]
})
export class CategoryMenuComponentModule {
}
