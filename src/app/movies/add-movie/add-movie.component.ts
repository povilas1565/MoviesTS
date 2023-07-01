import { MoviesService } from '../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  @Input() name = '';
  @Input() isNew = false;
  @Input() date = new Date();
  @Input() actorName = '';
  @Input() actorAge = 0;
  @Input() gender = '';

  addMovie() {
    let newMovie = {
      name: this.name,
      actors: [
        {
          actorName: this.actorName,
          actorAge: this.actorAge,
          gender: this.gender,
        },
      ],
      isNew: this.isNew,
      date: this.date,
    };
    this.moviesService.addMovie(newMovie);
  }
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}
}
