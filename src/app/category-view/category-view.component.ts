import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  jokes: any[];

  constructor(private DataserviceService: DataserviceService, private route: ActivatedRoute) { }

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