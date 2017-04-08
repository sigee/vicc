import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vicc-detail',
  templateUrl: './vicc-detail.component.html',
  styleUrls: ['./vicc-detail.component.css']
})
export class ViccDetailComponent implements OnInit {
  joke: any;

  constructor(private route: ActivatedRoute, private DataserviceService: DataserviceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.DataserviceService.getJoke(params.id).subscribe(joke => {
        this.joke = joke.data;
        console.log(joke.data);
      })
    })
  }

}
