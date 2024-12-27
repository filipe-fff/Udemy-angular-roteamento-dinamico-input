import { Component, inject, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersListService } from '../../services/users-list.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './user-container.component.html',
  styleUrl: './user-container.component.scss'
})
export class UserContainerComponent {
  user$: Observable<IUser> = of({} as IUser);

  private readonly _usersListService = inject(UsersListService);

  @Input() set userId(value: string) {
    this.user$ = this._usersListService.getUser(value);
  };
}