import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

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
    return this.http.get('http://localhost:3000/api/viccek/0')
      .map(res => res.json());
  }

  getInCat(category, page) {

  

    return this.http.get('http://localhost:3000/api/viccek/' + category + '/' + page)
      .map(res => res.json());
  }

}
