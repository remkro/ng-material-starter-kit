import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CatFactComponent } from './cat-fact.component';
import {AsyncPipe} from "@angular/common";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatCardModule, AsyncPipe, CommonModule],
  declarations: [CatFactComponent],
  providers: [],
  exports: [CatFactComponent]
})
export class CatFactComponentModule {
}
