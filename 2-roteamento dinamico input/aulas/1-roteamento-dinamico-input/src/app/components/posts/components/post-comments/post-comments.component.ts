import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.scss'
})
export class PostCommentsComponent implements OnInit {
  @Input() set postId(value: string) {
    console.log("postId =>", value);
    this._postId = value;
  }

  // NÃO FUNCIONA
  // @Input() set userId(value: string) {
  //   console.log("userId", value);
  //   this._userId = value;
  // }

  private readonly _activatedRoute = inject(ActivatedRoute);

  _postId: string = "";
  // _userId: string = "";

  ngOnInit(): void {
      this._activatedRoute.parent?.params.subscribe(value => {
        console.log("userId =>", value);
      });
  }
}