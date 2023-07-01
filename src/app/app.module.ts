import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actors/actor/actor.component';
import { MovieByNamePipe } from './pipes/movie-by-name.pipe';
import { ActorNamePipe } from './pipes/actor-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    AddMovieComponent,
    ActorsComponent,
    ActorComponent,
    MovieByNamePipe,
    ActorNamePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
