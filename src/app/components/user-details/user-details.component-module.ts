import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [UserDetailsComponent],
  providers: [],
  exports: [UserDetailsComponent]
})
export class UserDetailsComponentModule {
}
