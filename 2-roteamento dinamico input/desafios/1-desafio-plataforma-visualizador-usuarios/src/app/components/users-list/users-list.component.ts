import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UsersList } from '../../types/users-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  private readonly _userService = inject(UserService);
  usersList: UsersList = [];

  ngOnInit(): void {
      this._userService.getUsersList().subscribe((userResponse) => this.usersList = userResponse);
  }
}