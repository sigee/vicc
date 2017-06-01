import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { DataServiceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories: any[];

  constructor(public authService: AuthService, private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.dataServiceService.getCategories().subscribe(categories => {
      this.categories = categories.data;
    });
  }
}
