import { Movie } from '../interfaces/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [];
  constructor() {}
  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
  getMovies(): Movie[] {
    return this.movies;
  }
}
