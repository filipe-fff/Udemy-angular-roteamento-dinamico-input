import { Component, inject, Input } from '@angular/core';
import { CommentService } from '../../../../services/comment.service';
import { CommentsList } from '../../../../types/comments-list';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  private readonly _commentService = inject(CommentService);
  commentsList: CommentsList = [];

  @Input() set postId(value: string) {
    this._commentService.getCommentsListByPostId(value).pipe(take(1)).subscribe((commentsResponse) => this.commentsList = commentsResponse);
  }
}