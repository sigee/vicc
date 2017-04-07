import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Location, LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
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

  constructor(private router: Router, private DataserviceService: DataserviceService, private route: ActivatedRoute, location: Location) { this.location = location; }

  ngOnInit() {
    //this.jokes = jokes.data;
    this.route.params.subscribe(params => {
      console.log(params.category);

      this.DataserviceService.getInCat(params.category, params.page).subscribe(jokes => {
        this.jokes = jokes.data;
        console.log(jokes);

      })

    })
  }

  /*next() {
    this.route.params.subscribe(params => {
      //this.nextPage = parseInt(params.page) + 1;
      this.router.navigate(['category/' + params.category + '/' + parseInt(params.page) + 1]);
    })
  }*/

  paginate(event) {
    console.log(event);

    this.route.params.subscribe(params => {
      this.goLoc = 'category/' + params.category + '/' + event.page;
      //window.location.reload();
      this.router.navigate([this.goLoc]);
    })

    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

}


/*

dataService.getInCat($routeParams.tag, $routeParams.page, function (response) {
  $scope.allJokesInCat = response.data.data;
});

$scope.next5 = function() {
  let actualPath = $location.path();
  let next = parseInt($routeParams.page) + 1;
  $location.path('/category/' + $routeParams.tag + '/' + next);
};

$scope.prev5 = function() {
  let actualPath = $location.path();
  let next = parseInt($routeParams.page) - 1;
  $location.path('/category/' + $routeParams.tag + '/' + next);
};

*/