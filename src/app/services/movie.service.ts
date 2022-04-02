import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = '03AGdBq25FtQzJqQIXrxkPG98jkGvS1-y8K7EBAKmBYItpCg98hjOD6Ryf_i57EmxBMjxpnQawAQ3o8C4tI_38JExcwg8UIXQpGd660iTNapuHCZv9v1T6fM1HlW-bC3r-PRoRpeLHVO3CkJiItl4eJFka8mF_DMqMMBXqrIxicXm5wl8SpFmI-LV9wRF2perNrGkjr0EjNICBSCNfxi2OAmJZfGtmYNMFDznfKmUjjjFAY2A7MltW5h3w9JjlQFiUG9iUbCcFuN3DVTaRjsqhrwf6vMc4SbSe9wHnpTyHunXyJRWO8qycJT_3lJ3xMW3m-PFqN98RrceA5sUrr2yJDCWw1ADMwYIytW3SI2eMXaEO0uN5PoANe2UHCVVuUCEEtWOxXGzFdUv3MtmWmsmInSLHM7378GW5IPPlPs7Q5RVX2FuTjIklNIzaA5EZm2DRvdU5Pq5uDeJ7'; // <-- Enter your own key here!


  constructor(private http: HttpClient) { }


  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?t=${encodeURI(title)}&y=2010&token=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
