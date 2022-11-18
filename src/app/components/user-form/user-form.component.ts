import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  styleUrls: ['./user-form.component.scss'],
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    name: new FormGroup({
      firstname: new FormControl,
      lastname: new FormControl
    }),
    address: new FormGroup({
      city: new FormControl,
      street: new FormControl,
      number: new FormControl,
      zipcode: new FormControl,
    }),
    phone: new FormControl
  });

  constructor(private _userService: UserService) {
  }

  onUserFormSubmitted(userForm: FormGroup): void {
    this._userService.create({
      email: userForm.get('email')?.value,
      username: userForm.get('username')?.value,
      password: userForm.get('password')?.value,
      name: userForm.get('name')?.value,
      address: userForm.get('address')?.value,
      phone: userForm.get('phone')?.value
    }).subscribe();
  }
}
