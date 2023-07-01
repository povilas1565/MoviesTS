import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';
@Pipe({
  name: 'actorName',
})
export class ActorNamePipe implements PipeTransform {
  transform(movies: Movie[], actorName: string): Movie[] {
    if (!actorName) return movies;
    let actor = movies.filter((actor) =>
      actor.actors.find((name) => name.actorName.includes(actorName))
    );
    return actor;
  }
}
