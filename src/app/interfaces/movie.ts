import { Actor } from './actor';
export interface Movie {
  name: string;
  actors: Actor[];
  isNew: boolean;
  date: Date;
}
