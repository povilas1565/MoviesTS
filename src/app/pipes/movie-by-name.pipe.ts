import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';
@Pipe({
  name: 'movieByName',
})
export class MovieByNamePipe implements PipeTransform {
  transform(movies: Movie[], name: string): Movie[] {
    if (!name) return movies;
    name = name.toLowerCase();
    return movies.filter((movie) => movie.name.toLowerCase().includes(name));
  }
}
