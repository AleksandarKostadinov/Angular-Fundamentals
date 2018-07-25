import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { IMovieData } from '../models/movie-data.model';

const apiKey = 'bc2747a88c04f41e0a0b1a3690ca86e4';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private authentication: string = '&api_key=';
  private theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<IMovieData> {
    return this.http.get<IMovieData>(this.path + this.popular + this.authentication + apiKey)
  }

  getTheaters(): Observable<IMovieData> {
    return this.http.get<IMovieData>(this.path + this.theaters + this.authentication + apiKey)
  }
}
