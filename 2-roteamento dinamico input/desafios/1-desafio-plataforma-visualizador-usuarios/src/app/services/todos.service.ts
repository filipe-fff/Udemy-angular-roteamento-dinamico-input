import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodosList } from "../types/todos-list";

@Injectable({
    providedIn: "root",
})
export class TodosService {
    private readonly _http = inject(HttpClient);

    getTodosListByUserId(userId: string): Observable<TodosList> {
        return this._http.get<TodosList>("https://jsonplaceholder.typicode.com/todos?userId=" + userId);
    }
}