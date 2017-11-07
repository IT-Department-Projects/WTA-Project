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
var spotify_service_1 = require("./spotify.service");
var SearchComponent = (function () {
    function SearchComponent(_spotifyservice) {
        this._spotifyservice = _spotifyservice;
        this.searchStr = "";
        this.recommendations = [];
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._spotifyservice.searchMusic(this.searchStr)
            .subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
        this._spotifyservice.getArtist()
            .subscribe(function (res) {
            _this.recommendations = res;
        });
        this._spotifyservice.postArtist()
            .subscribe(function (error) {
            console.error("Error saving food!");
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search',
        templateUrl: 'search.component.html',
        providers: [spotify_service_1.SpotifyService]
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map