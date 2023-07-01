import { MovieByNamePipe } from '../pipes/movie-by-name.pipe';

describe('MovieByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
