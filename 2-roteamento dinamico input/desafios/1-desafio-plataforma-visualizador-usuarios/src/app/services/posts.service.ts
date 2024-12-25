import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PostService {
    private readonly _https = inject(HttpClient);

    getPostsListByUserId(userId: string): Observable<any> {
        return this._https.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    }
}