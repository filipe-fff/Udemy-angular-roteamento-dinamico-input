import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsListService } from '../../../../services/posts-list.service';
import { Observable, of } from 'rxjs';
import { PostsListResponse } from '../../../../types/posts-list-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  postsList$: Observable<PostsListResponse> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _postsListService = inject(PostsListService);

  ngOnInit() {
      this._activatedRoute.parent?.params.subscribe(
        (params) => this.postsList$ = this._postsListService.getUserPosts(params["userId"])
      );
  }
}