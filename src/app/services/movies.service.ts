import { Movie } from '../interfaces/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies: Movie[] = [
    {
      name: 'Cinderella',
      actors: [
        {
          actorName: 'yarin',
          actorAge: 21,
          gender: 'female',
        },
      ],
      isNew: false,
      date: new Date('2022-03-19'),
    },
    {
      name: 'Fast and Furious',
      actors: [
        {
          actorName: 'taner',
          actorAge: 45,
          gender: 'male',
        },
        {
          actorName: 'shon',
          actorAge: 57,
          gender: 'male',
        },
      ],
      isNew: false,
      date: new Date('2003-05-06'),
    },
    {
      name: 'Room',
      actors: [
        {
          actorName: 'lee',
          actorAge: 33,
          gender: 'female',
        },
      ],
      isNew: true,
      date: new Date('2019-01-16'),
    },
  ];
  constructor() {}
  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
  getMovies(): Movie[] {
    return this.movies;
  }
}
