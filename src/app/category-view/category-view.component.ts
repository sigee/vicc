import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../dataservice.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-view',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  location: Location;
  jokes: any[];
  goLoc: string;
  nextPage: Number;
  categories: any[];

  constructor(private router: Router, private dataServiceService: DataServiceService, private route: ActivatedRoute, location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataServiceService.getInCat(params.category, params.page).subscribe(jokes => {
        this.jokes = jokes.data;
      });
    });

    this.dataServiceService.getCategories().subscribe(categories => {
      this.categories = categories.data;
    });
  }

  voteUp() {
    alert('Fejlesztés folyamatban');
  }

  voteDown() {
    alert('Fejlesztés folyamatban');
  }

  paginate(event) {
    this.route.params.subscribe(params => {
      this.goLoc = 'category/' + params.category + '/' + event.page;
      this.router.navigate([this.goLoc]);
    });
  }

}


