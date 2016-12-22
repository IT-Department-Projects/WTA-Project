import { Component,OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import {ActivatedRoute} from '@angular/router'
import {Artist} from '../Artist';
import {Album} from '../Album';



@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit { 

    id:string;
    artist:Artist[];
    albums:Album[];

    constructor(private _spotifyService:SpotifyService,
                private _route:ActivatedRoute){  
    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.searchArtist(id)
                    .subscribe(artist => {
                        this.artist=artist;
                    })

                  this._spotifyService.searchAlbum(id)
                    .subscribe(albums => {
                        this.albums=albums.items;
                    })
            })

    }
}
