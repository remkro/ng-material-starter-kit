import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDetailsComponent } from './activity-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ActivityDetailsComponent],
  providers: [],
  exports: [ActivityDetailsComponent]
})
export class ActivityDetailsComponentModule {
}
