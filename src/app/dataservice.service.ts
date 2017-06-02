import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

const url = 'https://viccek.herokuapp.com';

@Injectable()
export class DataServiceService {
    category: string;
    page: number;

  constructor(private http: Http) { }

  getJokes() {
    return this.http.get(url + '/api/viccek/0')
      .map(res => res.json());
  }

   getJoke(id) {
    return this.http.get(url + '/api/kereses/' + id)
      .map(res => res.json());
  }

  getInCat(category, page) {
    return this.http.get(url + '/api/viccek/' + category + '/' + page)
      .map(res => res.json());
  }


  voteUp() {
  }

  getCategories() {
    return this.http.get(url + '/api/categories')
      .map(res => res.json());
  }
}
