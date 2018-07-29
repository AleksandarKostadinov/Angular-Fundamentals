import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input("movies") movies: IMovie[];
  @Input("category") category: string;

  constructor() { }

  ngOnInit() {
  }
}
