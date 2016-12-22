import { Component,OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import {ActivatedRoute} from '@angular/router'
import {Artist} from '../Artist';
import {Album} from '../Album';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit { 

    id:string;
    album:Album[];

    constructor(private _spotifyService:SpotifyService,
                private _route:ActivatedRoute){  
    }

    ngOnInit(){

        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.searchAlbumInfo(id)
                    .subscribe(album => {
                        this.album=album;
                    })

            })

    }

}

