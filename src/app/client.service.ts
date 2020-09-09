import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  async getMovies(name) {
    if (name == null || name == undefined || name == '') {
      console.log('entrar');
      await this.http.get(`https://www.omdbapi.com/?s=play&apikey=eba80bf2`);
    } else {
      return await this.http
        .get(`https://www.omdbapi.com/?s=${name}&apikey=eba80bf2`)
        .pipe(
          map((res) =>
            res['Response'] === 'True' ? res['Search'] : res['Error']
          )
        )
        .toPromise();
    }
    // async ListData(pathData: string, jsonData: object) {
    //   let params = `authorization=${this.token}&json=${JSON.stringify(jsonData)}`;
    //   return await this._http.post(`${this.urlApi}/${pathData}`, params, { headers: this.headers }).toPromise()
    // }

    /*
      subscribe((res) => {
      });
      */
  }

  getMovie(id) {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=eba80bf2`);
  }
}
