import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { MoviesComponent } from './movies/movies/movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: '**', redirectTo: 'movies'}
];

const routesModule: ModuleWithProviders = RouterModule.forRoot(routes);

export { routesModule };
