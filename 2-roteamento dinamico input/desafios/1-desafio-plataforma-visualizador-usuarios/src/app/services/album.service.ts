import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AlbumsList } from "../types/albums-list";

@Injectable({
    providedIn: "root",
})
export class AlbumService {
    private readonly _http = inject(HttpClient);

    getAlbumsListByUserId(userId: string): Observable<AlbumsList> {
        return this._http.get<AlbumsList>("https://jsonplaceholder.typicode.com/albums?userId=" + userId);
    }
}