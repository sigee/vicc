import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  jokes: any[];

  constructor(private DataserviceService: DataserviceService) { }

  ngOnInit() {
    this.DataserviceService.getJokes().subscribe(jokes => {
      //this.jokes = jokes.data;
      console.log(jokes);
    })
  }

}

/*

dataService.getAll($routeParams.page, function (response) {
  $scope.allJokes = response.data.data;
});

*/