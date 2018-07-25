import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { IMovie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: IMovie[];
  theaters: IMovie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService
      .getPopular()
      .subscribe(data => {
        this.popular = data['results'];
        console.log(data);
      });

    this.movieService
      .getTheaters()
      .subscribe(data => {
        this.theaters = data['results'];
        console.log(data)
      });
  }
}
