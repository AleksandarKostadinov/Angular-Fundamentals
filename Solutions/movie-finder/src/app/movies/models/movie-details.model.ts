import { IGenre } from "./genre.model";

export interface IMovieDetails {
  title: string;
  poster_path: string;
  genres: IGenre[];
  release_date: Date;
  homepage: string;
}
