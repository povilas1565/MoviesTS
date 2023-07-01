import { MoviesService } from './../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  @Input() movieByName = '';
  @Input() movieByActorName = '';

  constructor(private service: MoviesService) {
    this.movies = this.service.getMovies();
  }

  ngOnInit(): void {}
}
