import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersList } from "../types/users-list";
import { IUser } from "../interfaces/user/user.interface";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private readonly _http = inject(HttpClient);

    getUsersList(): Observable<UsersList> {
        return this._http.get<UsersList>("https://jsonplaceholder.typicode.com/users");
    }

    getUserById(id: string): Observable<IUser> {
        return this._http.get<IUser>("https://jsonplaceholder.typicode.com/users/" + id);
    }
}