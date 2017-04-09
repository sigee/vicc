import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app-vicc-detail',
  templateUrl: './vicc-detail.component.html',
  styleUrls: ['./vicc-detail.component.css']
})
export class ViccDetailComponent implements OnInit {
  joke: any;
  title: string;

  constructor(private route: ActivatedRoute, private DataserviceService: DataserviceService, private metaService: MetaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.DataserviceService.getJoke(params.id).subscribe(joke => {
        this.joke = joke.data;
        console.log(this.joke[0].tag);
        console.log(typeof this.joke);
        this.metaService.setTitle(this.joke[0].cim);
        this.metaService.setTag('description', this.joke[0].tartalom);
        this.metaService.setTag('og:image', 'https://viccek.herokuapp.com/assets/banana.png');
      })
    })



  }

}
