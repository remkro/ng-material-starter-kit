import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryChecklistComponent } from './category-checklist.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoryChecklistComponent],
  providers: [],
  exports: [CategoryChecklistComponent]
})
export class CategoryChecklistComponentModule {
}
