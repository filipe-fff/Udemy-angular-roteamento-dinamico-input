import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersList } from '../../types/users-list';
import { UsersService } from '../../services/users.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ AsyncPipe, RouterLink ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  usersList$: Observable<UsersList> = of([]);

  private readonly _usersList = inject(UsersService);

  ngOnInit(): void {
      this.usersList$ = this._usersList.getUsers();
  }
}