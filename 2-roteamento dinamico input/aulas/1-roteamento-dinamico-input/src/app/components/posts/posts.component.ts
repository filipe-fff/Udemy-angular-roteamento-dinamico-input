import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersPostList } from '../../types/users-post-list';
import { UserPost } from '../../services/user-post.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  // @Input() userId: string = "";

  postsList$: Observable<UsersPostList> = of([]);

  @Input() set userId(value: string) {
    console.log("value => ", value);
    this.postsList$ = this._postsList.getUserPost(this.userId);
  };
  
  private readonly _postsList = inject(UserPost);

  ngOnInit() {
      console.log("ngOnInit => ", this.userId);
      // this.postsList$ = this._postsList.getUserPost(this.userId);
  }
}