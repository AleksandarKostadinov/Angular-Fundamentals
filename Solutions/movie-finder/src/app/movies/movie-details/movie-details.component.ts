import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { MoviesService } from '../service/movies.service';
import { IMovieDetails } from '../models/movie-details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private id: string;
  private movie: IMovieDetails;

  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      
      this.service.getDetails(this.id).subscribe(movie => {
        this.movie = movie;
        console.log(movie)
      })
    })
  }
}
