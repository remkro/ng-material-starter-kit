import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { HolidayService } from '../../services/holiday.service';

@Component({
  selector: 'app-holiday-list',
  styleUrls: ['./holiday-list.component.scss'],
  templateUrl: './holiday-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidayListComponent {
  readonly list$: Observable<HolidayModel[]> = this._holidayService.getAll();

  constructor(private _holidayService: HolidayService) {
  }
}
