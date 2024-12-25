import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostsList } from "../types/posts-list";

@Injectable({
    providedIn: "root",
})
export class PostService {
    private readonly _https = inject(HttpClient);

    getPostsListByUserId(userId: string): Observable<PostsList> {
        return this._https.get<PostsList>("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    }
}