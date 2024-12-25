import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostsList } from "../types/posts-list";
import { IPost } from "../interfaces/post.interface";

@Injectable({
    providedIn: "root",
})
export class PostService {
    private readonly _https = inject(HttpClient);

    getPostsListByUserId(userId: string): Observable<PostsList> {
        return this._https.get<PostsList>("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    }

    getPostById(id: string): Observable<IPost> {
        return this._https.get<IPost>("https://jsonplaceholder.typicode.com/posts/" + id);
    }
}