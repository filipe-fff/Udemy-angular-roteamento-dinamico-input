import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AlbumService {
    private readonly _http = inject(HttpClient);

    getAlbumsListByUserId(userId: string): Observable<any> {
        return this._http.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId);
    }
}