"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
        this.headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer BQBQ6ThzdVV4I5VRHFa92L9EPt6xKUiizRrjszopZw5L8hs36WXs-COa_PMnjeCpkULC65ZUddExImRpKmuvVnGoahy-rPQUT_LEuS-CXtTXeYFBRVNGz5Rd7VxMgUQne4PGpHnpaSlpXJz_tWRqnjzluTCsmOe-OnJI15aYxnN5mgEc2Qw'
        };
        this.headerObj = {
            headers: new http_1.Headers(this.headers),
        };
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        this.str = str;
        this.searchURL = "https://api.spotify.com/v1/search?query=" + str + "&offset=0&limit=20&type=" + type + "&market=US";
        return this._http.get(this.searchURL, this.headerObj)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.searchArtist = function (id) {
        this.artistURL = "https://api.spotify.com/v1/artists/" + id;
        return this._http.get(this.artistURL, this.headerObj)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.searchAlbum = function (artistId) {
        this.albumsURL = "https://api.spotify.com/v1/artists/" + artistId + "/albums";
        return this._http.get(this.albumsURL, this.headerObj)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.searchAlbumInfo = function (Id) {
        this.albumURL = "https://api.spotify.com/v1/albums/" + Id;
        return this._http.get(this.albumURL, this.headerObj)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function () {
        this.getArtistURL = "http://127.0.0.1:5000/music/api/getRecommendations";
        return this._http.get(this.getArtistURL)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.postArtist = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://localhost:5000/music/api/postArtist', { artist: this.str }, options).map(function (res) { return res.json(); });
    };
    return SpotifyService;
}());
SpotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map