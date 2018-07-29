import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { routesModule } from './app.routing';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    routesModule,
    MoviesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
