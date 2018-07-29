import { NgModule } from "../../../node_modules/@angular/core";
import { CommonModule } from "../../../node_modules/@angular/common";
import { HttpClientModule } from "../../../node_modules/@angular/common/http";
import { FormsModule } from "../../../node_modules/@angular/forms";

import { MovieComponent } from "./movie/movie.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

import { MoviesService } from "./service/movies.service";
import { RouterModule } from "../../../node_modules/@angular/router";

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
    MoviesComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule 
  ],
  providers: [
    MoviesService
  ],
  exports: [
    MovieDetailsComponent,
    MoviesComponent
  ]
})
export class MoviesModule { }