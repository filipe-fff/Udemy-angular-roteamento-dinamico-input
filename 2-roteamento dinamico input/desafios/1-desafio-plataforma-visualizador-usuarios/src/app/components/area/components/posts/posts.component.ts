import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from '../../../../services/posts.service';
import { PostsList } from '../../../../types/posts-list';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  private readonly _postService = inject(PostService);
  postsList: PostsList = [];

  @Input() set userId(value: string) {
    this._postService.getPostsListByUserId(value).subscribe((postsResponse) => this.postsList = postsResponse);
  };
}