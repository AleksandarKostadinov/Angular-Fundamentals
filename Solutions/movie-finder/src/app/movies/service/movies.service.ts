import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieData } from '../models/movie-data.model';
import { IMovieDetails } from '../models/movie-details.model';

const apiKey = 'bc2747a88c04f41e0a0b1a3690ca86e4';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private authForDetails: string = '?api_key=';
  private authentication: string = '&api_key=';
  private theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  private forKids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  private drama: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  private search: string = 'search/movie';
  private searchPrefix: string = '&page=1&include_adult=false';

  constructor(private http: HttpClient) { }

  searchBy(val: string) {
    return this.http.get<IMovieData>(this.path + this.search + '?query='+ val + this.authentication + apiKey + this.searchPrefix)
  }

  getPopular(): Observable<IMovieData> {
    return this.http.get<IMovieData>(this.path + this.popular + this.authentication + apiKey)
  }

  getTheaters(): Observable<IMovieData> {
    return this.http.get<IMovieData>(this.path + this.theaters + this.authentication + apiKey)
  }

  getForKids(): Observable<IMovieData> {
    return this.http.get<IMovieData>(this.path + this.forKids + this.authentication + apiKey)
  }

  getDrama(): Observable<IMovieData> {
    return this.http.get<IMovieData>(this.path + this.drama + this.authentication + apiKey)
  }

  getDetails(id: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(this.path + "movie/" + id + this.authForDetails + apiKey)
  }
}
