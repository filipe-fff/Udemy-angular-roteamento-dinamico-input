import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersPostList } from "../types/users-post-list";

@Injectable({
    providedIn: "root",
})
export class UserPost {
    private readonly _http = inject(HttpClient)

    getUserPost(userId: string): Observable<UsersPostList> {
        return this._http.get<UsersPostList>("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    }
}