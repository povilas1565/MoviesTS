import { ActorNamePipe } from './actor-name.pipe';

describe('ActorNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ActorNamePipe();
    expect(pipe).toBeTruthy();
  });
});
