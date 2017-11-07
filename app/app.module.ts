import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { SearchComponent } from './search.component';
import { NavbarComponent } from './navbar.component';
import { ArtistComponent } from './artist.component';
import { AlbumComponent } from './album.component';
import {SpotifyService} from './spotify.service';
import {RecommendationComponent} from './recommendation.component';


const appRoutes: Routes = [
  
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id',component: ArtistComponent},
  { path: 'album/:id',component: AlbumComponent},
  {path: 'recommendation',component:RecommendationComponent}
];


@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  FormsModule,
                  HttpModule
                ],
  declarations: [ AppComponent,
                  AboutComponent,
                  NavbarComponent,
                  SearchComponent,
                  ArtistComponent,
                  AlbumComponent ,
                  RecommendationComponent
                ],
  providers: [SpotifyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
