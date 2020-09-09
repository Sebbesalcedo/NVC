import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieService } from '../../client.service';
import Swal from 'sweetalert2';
import { Time } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css'],
})
export class ListadoPeliculasComponent implements OnInit {
  buscador: FormControl;
  movies$: any = [];
  time;
  movieSearch: any = '';
  error: boolean = false;
  valueSearch: any;

  constructor(private movieService: MovieService) {
    this.buscador = new FormControl();
  }

  ngOnInit() {}

  infoMovie(name) {
    this.movieService.getMovie(name.imdbID).subscribe(
      (res) => {
        this.movieSearch = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchMovie(event) {
    this.valueSearch = event.target.value;
    this.error = false;
    if (/[@#$%&\[\]{}:;_\\~``{]/.test(event.target.value)) {
      this.error = true;
      return;
    }
    if (event.target.value.length < 3) return;

    let tm = 500;
    clearTimeout(this.time);
    this.time = setTimeout(() => {
      this.movieService.getMovies(event.target.value).then((rs) => {
        if (typeof rs === 'string') {
          this.error = true;
        } else {
          this.movies$ = rs;
        }

        console.log(this.movies$);
      });
    }, tm);
  }
}

// addUnit(product, target): void {
//   let tm = 1500
//   clearTimeout(this.time)

//   this.time = setTimeout(() => {

//     })
//   }, tm)
// }
