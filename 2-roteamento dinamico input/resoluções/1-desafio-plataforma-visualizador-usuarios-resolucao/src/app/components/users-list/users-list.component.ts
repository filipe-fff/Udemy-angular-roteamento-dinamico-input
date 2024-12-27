import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';
import { UsersListService } from '../../services/users-list.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  private readonly _usersListService = inject(UsersListService);
  usersList$: Observable<UsersListResponse> = of([]);

  ngOnInit() {
      this.usersList$ = this._usersListService.getUsers();
  }
}