import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlbumsListResponse } from '../../../../types/albums-list-response';
import { ActivatedRoute } from '@angular/router';
import { AlbumsListService } from '../../../../services/albums-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
  albumsList$: Observable<AlbumsListResponse> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _albumsListService = inject(AlbumsListService);

  ngOnInit() {
      this._activatedRoute.parent?.params.subscribe(
        (params) => this.albumsList$ = this._albumsListService.getUserAlbums(params["userId"])
      );
  }
}