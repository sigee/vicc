import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

const url = 'https://viccek.herokuapp.com/';
const local = 'http://localhost:3000';

@Injectable()
export class DataserviceService {
    category: string;
    page: number;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getJokes() {
    return this.http.get(url + '/api/viccek/0')
      .map(res => console.log(res)/*res.json()*/);
  }

  getInCat(category, page) {

  

    return this.http.get(url + '/api/viccek/' + category + '/' + page)
      .map(res => res.json());
  }

}
