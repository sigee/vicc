import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../dataservice.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  jokes: any[];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.dataServiceService.getJokes().subscribe(jokes => {
      this.jokes = jokes.data;
      console.log(jokes);
    });
  }

}

/*

dataService.getAll($routeParams.page, function (response) {
  $scope.allJokes = response.data.data;
});

*/
