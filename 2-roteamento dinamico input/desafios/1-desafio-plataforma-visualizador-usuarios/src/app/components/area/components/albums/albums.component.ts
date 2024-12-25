import { Component, inject, Input } from '@angular/core';
import { AlbumService } from '../../../../services/album.service';
import { AlbumsList } from '../../../../types/albums-list';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {
  private readonly _albumService = inject(AlbumService);
  albumsList: AlbumsList = []

  @Input() set userId(value: string) {
    this._albumService.getAlbumsListByUserId(value).pipe(take(1)).subscribe((algumsResponse) => this.albumsList = algumsResponse);
  };
}