import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersList } from "../types/users-list";

@Injectable({
    providedIn: "root",
})
export class UsersListService {
    private readonly _http = inject(HttpClient);

    getUsers(): Observable<UsersList> {
        return this._http.get<UsersList>("https://jsonplaceholder.typicode.com/users");
    }
}