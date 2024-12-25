import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from '../../../../services/posts.service';
import { IPost } from '../../../../interfaces/post.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private readonly _postService = inject(PostService);
  post: IPost = {} as IPost;

  @Input() set id(value: string) {
    this._postService.getPostById(value).pipe(take(1)).subscribe((postReponse) => this.post = postReponse);
  };
}