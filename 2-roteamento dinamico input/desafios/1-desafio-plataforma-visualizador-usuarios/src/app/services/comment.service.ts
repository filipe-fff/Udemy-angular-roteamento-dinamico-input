import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentsList } from "../types/comments-list";

@Injectable({
    providedIn: "root",
})
export class CommentService {
    private readonly _http = inject(HttpClient);

    getCommentsListByPostId( postId: string ): Observable<CommentsList> {
        return this._http.get<CommentsList>("https://jsonplaceholder.typicode.com/comments?postId=" + postId);
    }
}