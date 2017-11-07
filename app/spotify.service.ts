import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{

    private searchURL:string;
    private artistURL:string;
    private albumsURL:string;
    private albumURL:string;
    private getArtistURL:string;
    private str:string;

    private headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BQBQ6ThzdVV4I5VRHFa92L9EPt6xKUiizRrjszopZw5L8hs36WXs-COa_PMnjeCpkULC65ZUddExImRpKmuvVnGoahy-rPQUT_LEuS-CXtTXeYFBRVNGz5Rd7VxMgUQne4PGpHnpaSlpXJz_tWRqnjzluTCsmOe-OnJI15aYxnN5mgEc2Qw'
    };
      
    constructor(private _http:Http){}

    private headerObj = {                                                                                                                                                                                 
        headers: new Headers(this.headers), 
    };

    searchMusic(str:string,type='artist'){
        this.str=str;
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

    getArtist(){
        this.getArtistURL="http://127.0.0.1:5000/music/api/getRecommendations";
        return this._http.get(this.getArtistURL)
            .map(res => res.json());

    }

    postArtist() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:5000/music/api/postArtist', {artist:this.str}, options ).map(res=> res.json());
      }




}