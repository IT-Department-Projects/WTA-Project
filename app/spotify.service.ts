import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{

    private searchURL:string;
    private artistURL:string;
    private albumsURL:string;
    private albumURL:string;

    private headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BQAv4Ye8X8atKMa1pzF8p35gYoT0Oy2xQid5zMxPDXw9c1dfk5dSxZLB3U6wttNkwX4kHWWZNWit_IOFlpnMLSKLz8RbLXkqe1tE4yg_PX8geWD7uiSgSlDbdCh6J_GzaaXg9vU4zO9HF1OYrU794XkdRPOD3aR79029U5G4xe9WbpotdL0'
    };
      
    constructor(private _http:Http){}

    private headerObj = {                                                                                                                                                                                 
        headers: new Headers(this.headers), 
    };

    searchMusic(str:string,type='artist'){
        this.searchURL="https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US";
        return this._http.get(this.searchURL,this.headerObj)
            .map(res => res.json());
    }

    searchArtist(id:string){
        this.artistURL="https://api.spotify.com/v1/artists/"+id;
        return this._http.get(this.artistURL,this.headerObj)
            .map(res => res.json());
    }

    searchAlbum(artistId:string){
        this.albumsURL="https://api.spotify.com/v1/artists/"+artistId+"/albums";
        return this._http.get(this.albumsURL,this.headerObj)
            .map(res => res.json());
    }

    searchAlbumInfo(Id:string){
        this.albumURL="https://api.spotify.com/v1/albums/"+Id;
        return this._http.get(this.albumURL,this.headerObj)
            .map(res => res.json());
    }




}