import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user/user.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent {
  private readonly _userService = inject(UserService);
  user: IUser = {} as IUser;

  @Input() set userId(value : string) {
    this._userService.getUserById(value).pipe(take(1)).subscribe((userResponse) => this.user = userResponse);
  };
}